<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="com.crud.dao.BoardDAO, com.crud.bean.BoardVO"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Edit Form</title>
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
		<h1 class="card-header">Edit Form</h1>
		<div class="card-body">
			<form:form modelAttribute="u" action="../editok" method="post">
				<form:hidden path="seq"/>
				<div class="form-group">
					<label>Category:</label>
					<form:select path="category" class="form-control">
						<form:option value="인문" label="인문"/>
						<form:option value="경제" label="경제"/>
						<form:option value="철학" label="철학"/>
						<form:option value="역사" label="역사"/>
						<form:option value="동물" label="동물"/>
						<form:option value="수학" label="수학"/>
					</form:select>
				</div>
				<div class="form-group">
					<label>Title:</label>
					<form:input path="title" class="form-control"/>
				</div>
				<div class="form-group">
					<label>Writer:</label>
					<form:input path="writer" class="form-control"/>
				</div>
				<div class="form-group">
					<label>Content:</label>
					<form:textarea cols="50" rows="5" path="content" class="form-control"/>
				</div>
				<div class="form-group">
					<label>Recommendname:</label>
					<form:input path="recommendname" class="form-control"/>
				</div>
				<div class="form-group">
					<label>Recommendemail:</label>
					<form:input path="recommendemail" class="form-control" type="email"/>
				</div>
				<div class="form-group">
					<label>Publishdate:</label>
					<form:input path="publishdate" class="form-control" type="date"/>
				</div>
				<div class="form-group">
					<input type="submit" value="Edit Post" class="btn btn-primary"/>
					<input type="button" value="Cancel" onclick="history.back()" class="btn btn-secondary"/>
				</div>
			</form:form>
		</div>
	</div>
</div>

<!-- Optional JavaScript -->
<!-- jQuery and Bootstrap Bundle (includes Popper) -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src=https://cdn.jsdelivr.net/npm/popper.js@1.9.3/dist/umd/popper.min.js></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>

</body>
</html>