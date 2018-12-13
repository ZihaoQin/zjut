package com.engine.zjut.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

/**
 * @ClassName:User.java
 * @Description:TODO （）
 * @Author:qzh
 * @Date: 2018/11/2 13:07
 * @Version 1.0
 */
@Entity
@Data
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    //用户名
    private String  userName;
    //密码
    private String password;
    //邮箱
    private String email;
    //电话
    private String phone;
    //0 admin;1 teacher;2 student
    private Integer role;
    //0 invalid;1 valid
    private Integer state;
    //艺名
    private String nickName;
}
