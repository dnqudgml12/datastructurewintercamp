package com.crud.bean;

import java.util.Date;

public class BoardVO {
    private int seq;
    private String category;
    private String title;
    private String writer;
    private String content;
    private Date regdate;
    private String recommendname;


    private String recommendemail;
    private String publishdate;
    private int cnt;

    public int getSeq() {
        return seq;
    }
    public void setSeq(int seq) {
        this.seq = seq;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getWriter() {
        return writer;
    }
    public void setWriter(String writer) {
        this.writer = writer;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public Date getRegdate() {
        return regdate;
    }
    public void setRegdate(Date regdate) {
        this.regdate = regdate;
    }
    public String getRecommendname() {
        return recommendname;
    }

    public void setRecommendname(String recommendname) {
        this.recommendname = recommendname;
    }

    public String getRecommendemail() {
        return recommendemail;
    }

    public void setRecommendemail(String recommendemail) {
        this.recommendemail = recommendemail;
    }

    public String getPublishdate() {
        return publishdate;
    }

    public void setPublishdate(String publishdate) {
        this.publishdate = publishdate;
    }


    public int getCnt() {
        return cnt;
    }
    public void setCnt(int cnt) {
        this.cnt = cnt;
    }

}
