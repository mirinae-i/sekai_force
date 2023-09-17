<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="resources/css/check.css" />
    <title>Sekai Force</title>
  </head>
  <body>
    <!-- navbar start -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Sekai Force</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/check">Check</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/best_39">Best 39</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About this page</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- navbar end -->
    <!-- wrapper -->
    <div class="wrapper_out">
      <!-- title start -->
      <div class="row">
        <div class="col-12">
          <h1 class="title_text text-center">Check</h1>
        </div>
      </div>
      <!-- title end -->
      <!-- songs header start -->
      <div id="songs_header" class="songs_header">
        <p>Sort by:</p>
        <div class="row asc_desc_line">
          <div class="col d-flex justify-content-start">
            <div class="wrapper_asc_desc">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="radio_sort_method" id="radio_asc" value="option_asc" checked />
                <label class="form-check-label" for="radio_asc">Ascending</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="radio_sort_method" id="radio_desc" value="option_desc" />
                <label class="form-check-label" for="radio_desc">Descending</label>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-end">
            <button id="save_to_json" class="btn btn-primary">Save to JSON</button>
          </div>
        </div>
        <div class="row">
          <div class="btn-group" role="group" aria-label="sort_group_by">
            <input type="radio" class="btn-check" name="radio_btn" id="btn_radio_default" value="option_default" autocomplete="off" checked />
            <label class="btn btn-outline-primary" for="btn_radio_default">Default</label>
            <input type="radio" class="btn-check" name="radio_btn" id="btn_radio_hd" value="option_hd" autocomplete="off" />
            <label class="btn btn-outline-primary" for="btn_radio_hd">Hard</label>
            <input type="radio" class="btn-check" name="radio_btn" id="btn_radio_ex" value="option_ex" autocomplete="off" />
            <label class="btn btn-outline-primary" for="btn_radio_ex">Expert</label>
            <input type="radio" class="btn-check" name="radio_btn" id="btn_radio_mas" value="option_mas" autocomplete="off" />
            <label class="btn btn-outline-primary" for="btn_radio_mas">Master</label>
          </div>
        </div>
      </div>
      <!-- songs header end -->
      <!-- songs body start -->
      <div id="songs_body" class="songs_body"></div>
      <!-- songs body end -->
    </div>
    <!-- wrapper end -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
      crossorigin="anonymous"
    ></script>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
    <script src="resources/js/check.js"></script>
  </body>
</html>
