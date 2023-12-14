<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add New Post</title>
    <!-- Include Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body {
            padding-top: 20px;
        }
        .container {
            max-width: 600px;
        }
        .card {
            padding: 20px;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="card">
        <h1 class="card-header">Add New Post</h1>
        <div class="card-body">
            <form action="addok" method="post">
                <div class="form-group">
                    <label>Category:</label>
                    <select name="category" class="form-control">
                        <option value="인문">인문</option>
                        <option value="경제">경제</option>
                        <option value="철학">철학</option>
                        <option value="역사">역사</option>
                        <option value="동물">동물</option>
                        <option value="수학">수학</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Title:</label>
                    <input type="text" name="title" class="form-control"/>
                </div>
                <div class="form-group">
                    <label>Writer:</label>
                    <input type="text" name="writer" class="form-control"/>
                </div>
                <div class="form-group">
                    <label>Content:</label>
                    <textarea cols="50" rows="5" name="content" class="form-control"></textarea>
                </div>
                <div class="form-group">
                    <label>Recommendname:</label>
                    <input type="text" name="recommendname" class="form-control"/>
                </div>
                <div class="form-group">
                    <label>Recommendemail:</label>
                    <input type="email" name="recommendemail" class="form-control" placeholder="emal@email.com"/>
                </div>
                <div class="form-group">
                    <label>Publishdate:</label>
                    <input type="date" name="publishdate" class="form-control" placeholder="YYMM-MM-DD"/>
                </div>
                <div class="form-group">
                    <input type="submit" value="Add Post" class="btn btn-primary"/>
                    <input type="button" value="Cancel" onclick="history.back()" class="btn btn-secondary"/>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Optional JavaScript -->
<!-- jQuery and Bootstrap Bundle (includes Popper) -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.9.3/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>

</body>
</html>