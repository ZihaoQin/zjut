package com.engine.zjut.mapper;

import com.engine.zjut.entity.Location;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * @InterfaceName:UserLocation
 * @Description:TODO（）
 * @Author:qzh
 * @Date: 2018/10/31 15:50
 * @Version 1.0
 */
@Mapper
public interface LocationMapper {
    @Select("select * from location where userId = #{userId}")
    List<Location> findByUserId(int userId);
}
