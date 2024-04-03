<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="admin.css">
    <script type="text/javascript" src="js.js"></script>
    <script type="text/javascript" src="jquery-3.7.1.min.js"></script>
    <title>Document</title>
</head>
<body>
    <div class = "content">
        <h1>administrator</h1>
        <div class = "left">
            <h2>Register</h2>
            <form id = "register">
                <label for="name">Name:</label><br>
                <input type="text" id="name" name="name" required><br><br>
                
                <label for="tel">Telephone:</label><br>
                <input type="text" id="tel" name="tel" required><br><br>
                
                <label for="gender"> gender(m or f):</label><br>
                <input type="text" id="gender" name="gender" required><br><br>

                <label for="time"> registration time:</label><br>
                <input type="time" id="time" name="time" required><br><br>
                
                <input type="button" value="Submit" onclick = "register()">
            </form>
        </div>
        <div class="right">
            <h2>Wait list</h2>
            <table id="waitListTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Telephone</th>
                        <th>registration time</th>
                        <th>Code</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table><br>
            <input type="button" value="next" onclick = "next()">
        </div>
    </div>



</body>
</html>