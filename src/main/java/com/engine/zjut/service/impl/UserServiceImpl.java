package com.engine.zjut.service.impl;

import com.engine.zjut.entity.User;
import com.engine.zjut.mapper.UserMapper;
import com.engine.zjut.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName:UserServiceImpl.java
 * @Description:TODO （）
 * @Author:qzh
 * @Date: 2018/11/2 13:27
 * @Version 1.0
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private  UserMapper userMapper;
    @Override
    public User findById(int id) {
        User user = userMapper.findById(id);
        return user;
    }
}
