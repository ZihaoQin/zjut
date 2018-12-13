package com.engine.zjut.service;

import com.engine.zjut.entity.Location;

import java.util.List;

/**
 * @InterfaceName:LocationService
 * @Description:TODO（）
 * @Author:qzh
 * @Date: 2018/11/1 22:19
 * @Version 1.0
 */
public interface LocationService {
    List<Location> findByUserId(int userId);
}
