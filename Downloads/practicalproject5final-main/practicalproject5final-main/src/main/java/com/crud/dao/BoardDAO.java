package com.crud.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.crud.bean.BoardVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;


@Repository
public class BoardDAO {

    Connection conn = null;
    PreparedStatement stmt = null;
    ResultSet rs = null;

    private final String BOARD_INSERT = "insert into BOARD1 (title, writer, content, recommendname, recommendemail, publishdate) values (?,?,?,?,?,?)";
    private final String BOARD_UPDATE = "update BOARD1 set title=?, writer=?, content=?, recommendname=?, recommendemail=?, publishdate = ? where seq=?";
    private final String BOARD_DELETE = "delete from BOARD1  where seq=?";
    private final String BOARD_GET = "select * from BOARD1  where seq=?";
    private final String BOARD_LIST = "select * from BOARD1 order by seq desc";

    @Autowired
    JdbcTemplate jdbcTemplate;
    public int insertBoard(BoardVO vo) {
        String sql = "insert into BOARD1 (title, writer, content, category, recommendname, recommendemail, publishdate) values ('"
                + vo.getTitle() + "', '"
                + vo.getWriter() + "', '"
                + vo.getContent() + "', '"
                + vo.getCategory() + "', '"
                + vo.getRecommendname()+"', '"
                + vo.getRecommendemail()+"', '"
                +vo.getPublishdate()+"')";
        return jdbcTemplate.update(sql);
    }

    // 글 삭제
    public int deleteBoard(int seq) {
        String sql = "delete from BOARD1 where seq = " + seq;
        return jdbcTemplate.update(sql);
    }

    public int updateBoard(BoardVO vo) {
        String sql = "update BOARD1 set title='" + vo.getTitle() + "', "
                + "writer='" + vo.getWriter() + "', "
                + "content='" + vo.getContent() + "', "
                + "category='" + vo.getCategory() +"', "
                +"recommendname='"+vo.getRecommendname()+"', "
                +"recommendemail='"+vo.getRecommendemail()+"', "
                +"publishdate='"+vo.getPublishdate()+ "' where seq=" + vo.getSeq();
        return jdbcTemplate.update(sql);
    }

    class BoardRowMapper implements RowMapper<BoardVO> {
        @Override
        public BoardVO mapRow(ResultSet rs, int rowNum) throws SQLException {
            BoardVO vo = new BoardVO();
            try {
                vo.setSeq(rs.getInt("seq"));
            } catch (SQLException e) {
                throw new RuntimeException(e);
            }
            vo.setTitle(rs.getString("title"));
            vo.setWriter(rs.getString("writer"));
            vo.setContent(rs.getString("content"));
            vo.setCategory(rs.getString("category"));
            vo.setRegdate(rs.getTimestamp("regdate"));
            vo.setRecommendname(rs.getString("recommendname"));
            vo.setRecommendemail(rs.getString("recommendemail"));
            vo.setPublishdate(rs.getString("publishdate"));
            return vo;
        }
    }

    public BoardVO getBoard(int seq) {
        String sql = "select * from BOARD1 where seq=" + seq;
        return jdbcTemplate.queryForObject(sql, new BoardRowMapper());
    }

    public List<BoardVO> getBoardList() {
        String sql = "select * from BOARD1 order by regdate desc";
        return jdbcTemplate.query(sql, new BoardRowMapper());
    }
}
