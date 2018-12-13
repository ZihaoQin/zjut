package com.engine.zjut.controller;

import com.engine.zjut.VO.LocVO;
import com.engine.zjut.VO.UserLocVO;
import com.engine.zjut.entity.Location;
import com.engine.zjut.entity.User;
import com.engine.zjut.enums.LocationOffset;
import com.engine.zjut.service.LocationService;
import com.engine.zjut.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Conditional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @ClassName:UserLocCotroller.java
 * @Description:TODO （遍历重组、历史轨迹）
 * @Author:qzh
 * @Date: 2018/11/2 13:29
 * @Version 1.0
 */
@RestController
@RequestMapping("/userLoc")
public class UserLocCotroller {
    @Autowired
    private LocationService locationService;
    @Autowired
    private UserService userService;

    @RequestMapping("/find/{id}")
    public UserLocVO findUserLoc(@PathVariable("id") Integer id) {
        UserLocVO userLocVO = new UserLocVO();
        User user = userService.findById(id);
        List<Location> locationList = locationService.findByUserId(user.getId());

        //遍历重组
        List<LocVO> locVOS = new ArrayList<>();
        locationList.forEach(list -> {
            LocVO locVO = new LocVO();
            String[] locations = list.getCoordinate().split("-");
            locVO.setLocationId(list.getId());
            locVO.setLatitude(Double.valueOf(locations[0]) - LocationOffset.LATITUDE.getNum());
            locVO.setLongitude(Double.valueOf(locations[1]) - LocationOffset.LONGITUDE.getNum());
            locVO.setTime(list.getTime());
            locVO.setUserIp(list.getUserIp());
            locVOS.add(locVO);
        });


        locVOS.stream().sorted((list1, list2) -> Integer.parseInt(list1.getTime().getTime() - list2.getTime().getTime() + ""));
        userLocVO.setLocVO(locVOS);
        userLocVO.setUserId(user.getId());
        userLocVO.setUserName(user.getUserName());
        userLocVO.setEmail(user.getEmail());
        userLocVO.setPhone(user.getPhone());
        userLocVO.setRole(user.getRole());
        userLocVO.setState(user.getState());
        userLocVO.setNickName(user.getNickName());
        return userLocVO;
    }
}
