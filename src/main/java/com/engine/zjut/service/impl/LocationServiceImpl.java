package com.engine.zjut.service.impl;

import com.engine.zjut.entity.Location;
import com.engine.zjut.mapper.LocationMapper;
import com.engine.zjut.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ClassName:LocationServiceImpl.java
 * @Description:TODO （）
 * @Author:qzh
 * @Date: 2018/11/1 22:36
 * @Version 1.0
 */
@Service
public class LocationServiceImpl implements LocationService {

    @Autowired
    private LocationMapper locationMapper;
    @Override
    public List<Location> findByUserId(int userId) {
        List<Location> locationList = locationMapper.findByUserId(userId);
        return locationList;
    }
}
