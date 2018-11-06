<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>Faculty Search Results</title>
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

  
      <link rel="stylesheet" href="css/style.css">

  
</head>
<?php 
    $name=$_GET['name'];
    
?>
<body>

  <div class="blog-card spring-fever">
  <div class="title-content">
    <h3><?php echo $name; ?></h3>
    <hr />
    <div class="intro">SCHOOL OF INFORMATION TECHNOLOGY <br> VIT Vellore - 632014</div>
  </div><!-- /.title-content -->
  <div class="card-info">
    Find your best faculty here using our faculty search portal implemented through cache memory.
  </div><!-- /.card-info -->
  <!-- overlays -->
  <div class="gradient-overlay"></div>
  <div class="color-overlay"></div>
</div><!-- /.blog-card -->
  
  

    <script  src="js/index.js"></script>




</body>

</html>
