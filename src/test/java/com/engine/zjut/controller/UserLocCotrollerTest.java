package com.engine.zjut.controller;

import com.engine.zjut.VO.LocVO;
import com.engine.zjut.VO.UserLocVO;
import com.engine.zjut.entity.Location;
import com.engine.zjut.entity.User;
import com.engine.zjut.service.LocationService;
import com.engine.zjut.service.UserService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserLocCotrollerTest {
    @Autowired
    private LocationService locationService;
    @Autowired
    private UserService userService;
    @Test
    public void findUserLoc() throws Exception {
        UserLocVO userLocVO = new UserLocVO();
        LocVO locVO = new LocVO();
        User user = userService.findById(2);
        List<Location> locationList = locationService.findByUserId(user.getId());

        List<LocVO> locVOS = new ArrayList<>();
        locationList.forEach(list->{
            String[] locations = list.getCoordinate().split("-");
            locVO.setLocationId(list.getId());
            locVO.setLatitude(Double.valueOf(locations[0]));
            locVO.setLongitude(Double.valueOf(locations[1]));
            locVO.setTime(list.getTime());
            locVO.setUserIp(list.getUserIp());
            locVOS.add(locVO);
        });

        userLocVO.setLocVO(locVOS);
        userLocVO.setUserId(user.getId());
        userLocVO.setUserName(user.getUserName());
        userLocVO.setEmail(user.getEmail());
        userLocVO.setPhone(user.getPhone());
        userLocVO.setRole(user.getRole());
        userLocVO.setState(user.getState());
        userLocVO.setNickName(user.getNickName());
        System.out.println(userLocVO);
        Assert.assertNotNull(userLocVO);
    }

}