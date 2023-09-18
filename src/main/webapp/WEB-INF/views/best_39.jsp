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
    <link rel="stylesheet" href="resources/css/best_39.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css" />
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
    <div class="wrapper_out">
      <!-- title start -->
      <div class="row">
        <div class="col-12">
          <h1 class="title_text text-center">My Best 39</h1>
        </div>
      </div>
      <!-- title end -->
      <form id="json_upload_form" class="row row-cols-md-auto g-3 align-items-center wrapper_input" enctype="multipart/form-data">
        <div class="col-12">
          <div class="input">
            <label for="input_json">Input JSON File(sekai_force_data.json):</label>
            <input type="file" class="form-control" id="input_json" name="input_json" accept="application/json" />
          </div>
        </div>
        <div class="col-12">
          <button type="button" class="btn btn-primary" onclick="upload()">Submit</button>
        </div>
      </form>
      <div class="wrapper_best39 text-center">
        <div class="row">
          <div class="col-4" style="font-weight: bold"><p id="best_fc">Best FC Rate: 0.00</p></div>
          <div class="col-4" style="font-weight: bold"><p id="best_ap">Best AP Rate: 0.00</p></div>
          <div class="col-4" style="font-weight: bold"><p id="sekai_force">SEKAI Force: 0</p></div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="best_39_number">#1</p>
            <img id="best_39_image_1" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_1" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_1" class="best_39_song_difficulty">-</p>
            <p id="score_1" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#2</p>
            <img id="best_39_image_2" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_2" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_2" class="best_39_song_difficulty">-</p>
            <p id="score_2" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#3</p>
            <img id="best_39_image_3" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_3" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_3" class="best_39_song_difficulty">-</p>
            <p id="score_3" class="score">0.00</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="best_39_number">#4</p>
            <img id="best_39_image_4" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_4" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_4" class="best_39_song_difficulty">-</p>
            <p id="score_4" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#5</p>
            <img id="best_39_image_5" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_5" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_5" class="best_39_song_difficulty">-</p>
            <p id="score_5" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#6</p>
            <img id="best_39_image_6" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_6" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_6" class="best_39_song_difficulty">-</p>
            <p id="score_6" class="score">0.00</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="best_39_number">#7</p>
            <img id="best_39_image_7" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_7" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_7" class="best_39_song_difficulty">-</p>
            <p id="score_7" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#8</p>
            <img id="best_39_image_8" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_8" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_8" class="best_39_song_difficulty">-</p>
            <p id="score_8" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#9</p>
            <img id="best_39_image_9" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_9" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_9" class="best_39_song_difficulty">-</p>
            <p id="score_9" class="score">0.00</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="best_39_number">#10</p>
            <img id="best_39_image_10" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_10" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_10" class="best_39_song_difficulty">-</p>
            <p id="score_10" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#11</p>
            <img id="best_39_image_11" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_11" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_11" class="best_39_song_difficulty">-</p>
            <p id="score_11" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#12</p>
            <img id="best_39_image_12" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_12" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_12" class="best_39_song_difficulty">-</p>
            <p id="score_12" class="score">0.00</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="best_39_number">#13</p>
            <img id="best_39_image_13" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_13" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_13" class="best_39_song_difficulty">-</p>
            <p id="score_13" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#14</p>
            <img id="best_39_image_14" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_14" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_14" class="best_39_song_difficulty">-</p>
            <p id="score_14" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#15</p>
            <img id="best_39_image_15" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_15" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_15" class="best_39_song_difficulty">-</p>
            <p id="score_15" class="score">0.00</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="best_39_number">#16</p>
            <img id="best_39_image_16" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_16" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_16" class="best_39_song_difficulty">-</p>
            <p id="score_16" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#17</p>
            <img id="best_39_image_17" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_17" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_17" class="best_39_song_difficulty">-</p>
            <p id="score_17" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#18</p>
            <img id="best_39_image_18" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_18" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_18" class="best_39_song_difficulty">-</p>
            <p id="score_18" class="score">0.00</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="best_39_number">#19</p>
            <img id="best_39_image_19" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_19" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_19" class="best_39_song_difficulty">-</p>
            <p id="score_19" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#20</p>
            <img id="best_39_image_20" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_20" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_20" class="best_39_song_difficulty">-</p>
            <p id="score_20" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#21</p>
            <img id="best_39_image_21" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_21" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_21" class="best_39_song_difficulty">-</p>
            <p id="score_21" class="score">0.00</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="best_39_number">#22</p>
            <img id="best_39_image_22" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_22" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_22" class="best_39_song_difficulty">-</p>
            <p id="score_22" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#23</p>
            <img id="best_39_image_23" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_23" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_23" class="best_39_song_difficulty">-</p>
            <p id="score_23" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#24</p>
            <img id="best_39_image_24" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_24" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_24" class="best_39_song_difficulty">-</p>
            <p id="score_24" class="score">0.00</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="best_39_number">#25</p>
            <img id="best_39_image_25" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_25" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_25" class="best_39_song_difficulty">-</p>
            <p id="score_25" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#26</p>
            <img id="best_39_image_26" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_26" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_26" class="best_39_song_difficulty">-</p>
            <p id="score_26" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#27</p>
            <img id="best_39_image_27" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_27" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_27" class="best_39_song_difficulty">-</p>
            <p id="score_27" class="score">0.00</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="best_39_number">#28</p>
            <img id="best_39_image_28" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_28" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_28" class="best_39_song_difficulty">-</p>
            <p id="score_28" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#29</p>
            <img id="best_39_image_29" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_29" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_29" class="best_39_song_difficulty">-</p>
            <p id="score_29" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#30</p>
            <img id="best_39_image_30" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_30" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_30" class="best_39_song_difficulty">-</p>
            <p id="score_30" class="score">0.00</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="best_39_number">#31</p>
            <img id="best_39_image_31" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_31" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_31" class="best_39_song_difficulty">-</p>
            <p id="score_31" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#32</p>
            <img id="best_39_image_32" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_32" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_32" class="best_39_song_difficulty">-</p>
            <p id="score_32" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#33</p>
            <img id="best_39_image_33" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_33" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_33" class="best_39_song_difficulty">-</p>
            <p id="score_33" class="score">0.00</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="best_39_number">#34</p>
            <img id="best_39_image_34" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_34" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_34" class="best_39_song_difficulty">-</p>
            <p id="score_34" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#35</p>
            <img id="best_39_image_35" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_35" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_35" class="best_39_song_difficulty">-</p>
            <p id="score_35" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#36</p>
            <img id="best_39_image_36" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_36" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_36" class="best_39_song_difficulty">-</p>
            <p id="score_36" class="score">0.00</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="best_39_number">#37</p>
            <img id="best_39_image_37" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_37" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_37" class="best_39_song_difficulty">-</p>
            <p id="score_37" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#38</p>
            <img id="best_39_image_38" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_38" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_38" class="best_39_song_difficulty">-</p>
            <p id="score_38" class="score">0.00</p>
          </div>
          <div class="col-4">
            <p class="best_39_number">#39</p>
            <img id="best_39_image_39" class="best_39_image" src="resources/images/jacket/default.png" alt="song_image" />
            <p id="best_39_song_name_kr_39" class="best_39_song_name_kr">-</p>
            <p id="best_39_song_difficulty_39" class="best_39_song_difficulty">-</p>
            <p id="score_39" class="score">0.00</p>
          </div>
        </div>
      </div>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
      crossorigin="anonymous"
    ></script>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
    <script src="resources/js/best_39.js"></script>
  </body>
</html>
