package com.engine.zjut.service;

import com.engine.zjut.entity.User;

/**
 * @InterfaceName:UserService
 * @Description:TODO（）
 * @Author:qzh
 * @Date: 2018/11/2 13:27
 * @Version 1.0
 */
public interface UserService {
    User findById(int id);
}
