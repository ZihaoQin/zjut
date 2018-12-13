package com.engine.zjut.controller;

import com.alibaba.fastjson.JSON;
import com.engine.zjut.entity.Location;
import com.engine.zjut.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;


/**
 * @ClassName:LocationController.java
 * @Description:TODO （）
 * @Author:qzh
 * @Date: 2018/11/1 22:46
 * @Version 1.0
 */
@RestController
@RequestMapping("/location")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @RequestMapping("find")
    public String findByUserId() throws IOException {
        Location location = (Location) locationService.findByUserId(2);
        /*String data = location.getCoordinate();
        Map<String,String> map = new HashMap<String, String>();
        map.put("data",data);
        System.out.println("aaa:"+data);*/
        String data = JSON.toJSONString(location);
        System.out.println(data);
        return data;
    }
}

