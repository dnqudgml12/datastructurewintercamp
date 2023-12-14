<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Login Page</title>
    <!-- Include Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <style>
        .login-container {
            width: 400px;
            margin: 50px auto;
        }
    </style>
</head>
<body>

<div class="login-container">
    <h2 class="text-center">책 벌래에 오신것을 환영합니다</h2>
    <h3 class="text-center">로그인</h3>
    <form id="loginForm">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Login</button>
    </form>

</div>

<script>
    document.getElementById('loginForm').onsubmit = function(event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        var hardcodedUsername = 'user';
        var hardcodedPassword = 'pass';

        if(username === hardcodedUsername && password === hardcodedPassword) {
            location.href = 'board/posts';
        } else {
            alert('please enter user as ID and pass as password');
        }
    };
</script>

</body>
</html>