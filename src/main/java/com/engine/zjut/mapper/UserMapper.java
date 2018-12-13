package com.engine.zjut.mapper;

import com.engine.zjut.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

/**
 * @InterfaceName:UserMapper
 * @Description:TODO（）
 * @Author:qzh
 * @Date: 2018/11/2 13:23
 * @Version 1.0
 */
@Mapper
public interface UserMapper {
    @Select("select * from user where id = #{id}")
    User findById(int id);
}
