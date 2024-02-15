package com.boatapp.subash.Utils;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpHeaders.CONTENT_TYPE;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.HEAD;
import static org.springframework.http.HttpMethod.PATCH;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import java.util.Arrays;
import java.util.List;


public class MyConstant {
    public static final String USER = "/api/v1/user";
    public static final String Auth = "/api/v1/auth";
    public static final String Book = "/api/v1/book";
    public static final String Boat="/api/v1/boat";

    //boat
    public static final String UserBoat = "/details";
    public static final String postboat = "/post";
    

    //booking
    public static final String UserBook = "/details";
    public static final String PostBook = "/post";
    public static final String DeleteBook = "/delete";
    public static final String UpdateBook = "/update";

    //payment
    public static final String PayBook = "/paydetails";
    public static final String Postpay = "/postpay";

    public static final String REGISTER = "/register";
    public static final String LOGIN= "/login";
    public static final String USERLIST = "/list";
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:4000");
    public static final List<String> HEADERS = Arrays.asList(AUTHORIZATION, CONTENT_TYPE);
    public static final List<String> METHODS = Arrays.asList(GET.name(), POST.name(), PUT.name(), DELETE.name(),
            HEAD.name(), PATCH.name()); 


    // swager

    public static final String SWAGGER_LOCALHOST_URL="http://localhost:8181";
    public static final String SWAGGER_SECURITY_SCHEME_NAME="bearerAuth";
    public static final String SWAGGER_SCHEME="bearer";
    public static final String SWAGGER_BEARER_FORMAT="JWT";
    public static String SWAGGER_DESCRIPTION="Produce a Json Web Token";
  
}
