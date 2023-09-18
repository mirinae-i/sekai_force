function upload() {
    const input = $('#input_json')[0].files[0];
    let form_data = new FormData();

    if (input === undefined) {
        alert('Please upload the JSON files first.');
    } else {
        const file_type = input.type;
        if (file_type != 'application/json') {
            alert('Wrong file type.');
        } else {
            form_data.append('input', input);
            $.ajax({
                url: '/best_39_action',
                type: 'POST',
                enctype: 'multipart/form-data',
                data: form_data,
                processData: false,
                contentType: false,
                cache: false,
                success: function (data) {
                    console.log(data);
                    let result_arr = [];
                    const arr_json = $.parseJSON(JSON.stringify(data));
                    // difficulty K, V 분리
                    for (let index = 0; index < arr_json.length; index++) {
                        let result_obj = {};
                        result_obj.song_no = arr_json[index].song_no;
                        result_obj.song_name_kr = arr_json[index].song_name_kr;
                        if (arr_json[index].hasOwnProperty('fc_hard')) {
                            result_obj.marker = 'fc_hard';
                            result_obj.score = arr_json[index].fc_hard;
                        } else if (arr_json[index].hasOwnProperty('ap_hard')) {
                            result_obj.marker = 'ap_hard';
                            result_obj.score = arr_json[index].ap_hard;
                        } else if (arr_json[index].hasOwnProperty('fc_expert')) {
                            result_obj.marker = 'fc_expert';
                            result_obj.score = arr_json[index].fc_expert;
                        } else if (arr_json[index].hasOwnProperty('ap_expert')) {
                            result_obj.marker = 'ap_expert';
                            result_obj.score = arr_json[index].ap_expert;
                        } else if (arr_json[index].hasOwnProperty('fc_master')) {
                            result_obj.marker = 'fc_master';
                            result_obj.score = arr_json[index].fc_master;
                        } else if (arr_json[index].hasOwnProperty('ap_master')) {
                            result_obj.marker = 'ap_master';
                            result_obj.score = arr_json[index].ap_master;
                        } else {
                            result_obj.marker = 'unknown';
                            result_obj.score = 0.0;
                        }
                        result_arr.push(result_obj);
                    }

                    // score 역순으로 정렬
                    result_arr = result_arr.sort((x, y) => {
                        if (x.score > y.score) {
                            return -1;
                        } else if (x.score < y.score) {
                            return 1;
                        } else {
                            return 0;
                        }
                    });

                    // 39개까지만 담기
                    let best_39_arr = [];
                    let count = 0;
                    for (let index = 0; index < result_arr.length; index++) {
                        best_39_arr.push(result_arr[index]);
                        ++count;
                        if (count >= 39) {
                            break;
                        }
                    }

                    // best_39_arr의 데이터를 화면에 출력하기
                    let max_fc = 0.0;
                    let max_ap = 0.0;
                    let force = 0;
                    $.each(best_39_arr, function (index, item) {
                        $('#best_39_song_name_kr_' + (index + 1)).text(item.song_name_kr);
                        $('#score_' + (index + 1)).text(item.score);
                        force = force + item.score;
                        if (item.marker.startsWith('fc_')) {
                            $('#best_39_song_difficulty_' + (index + 1)).text('FC');
                            if (max_fc < item.score) {
                                max_fc = item.score;
                            }
                        }
                        if (item.marker.startsWith('ap_')) {
                            $('#best_39_song_difficulty_' + (index + 1)).text('AP');
                            if (max_ap < item.score) {
                                max_ap = item.score;
                            }
                        }
                    });
                    $('#sekai_force').text('SEKAI Force: ' + parseInt(force));
                    $('#best_fc').text('Best FC Rate: ' + max_fc);
                    $('#best_ap').text('Best AP Rate: ' + max_ap);
                },
                error: function () {},
            });
        }
    }
}
