package com.engine.zjut.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * @ClassName:Location.java
 * @Description:TODO （用户定位表）
 * @Author:qzh
 * @Date: 2018/10/31 15:32
 * @Version 1.0
 */
@Entity
@Data
@Table(name = "arcgis")
public class Location {
    //主键id
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    //用户id
    private Integer userId;
    //经纬度
    private String coordinate;
    //时间
    private Date time;
    //用户ip
    //@Transient
    private String userIp;
    //状态。0无效的点，1正常的点
    private Integer state;

    @Override
    public String toString() {
        return "Location{" +
                "id=" + id +
                ", userId=" + userId +
                ", coordinate='" + coordinate + '\'' +
                ", time=" + time +
                ", userIp='" + userIp + '\'' +
                ", state=" + state +
                '}';
    }
}
