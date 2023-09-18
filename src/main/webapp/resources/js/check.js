let check = {};
let sort_method = 'option_asc';
let sort_by = 'option_default';
let checked_val = new Set();

$(function () {
    // ASC, DESC
    $('input[name=radio_sort_method]').on('change', function (e) {
        e.preventDefault();
        sort_method = this.value;
        check.sort(sort_by, sort_method);
    });
    // Default, Hard, Expert, Master
    $('input[name=radio_btn]').on('change', function (e) {
        e.preventDefault();
        sort_by = this.value;
        check.sort(sort_by, sort_method);
    });
    check.sort = function (base, method) {
        $.ajax({
            url: '/check_action',
            type: 'POST',
            success: function (data) {
                // console.log(data);
                data.sort((a, b) => {
                    switch (base) {
                        case 'option_default':
                            switch (method) {
                                case 'option_asc':
                                    if (a.song_cate < b.song_cate) {
                                        return -1;
                                    } else if (a.song_cate > b.song_cate) {
                                        return 1;
                                    } else {
                                        return a.song_no < b.song_no ? -1 : 1;
                                    }
                                    break;
                                case 'option_desc':
                                    if (a.song_cate < b.song_cate) {
                                        return 1;
                                    } else if (a.song_cate > b.song_cate) {
                                        return -1;
                                    } else {
                                        return a.song_no < b.song_no ? 1 : -1;
                                    }
                                    break;
                                default:
                                    if (a.song_cate < b.song_cate) {
                                        return -1;
                                    } else if (a.song_cate > b.song_cate) {
                                        return 1;
                                    } else {
                                        return a.song_no < b.song_no ? -1 : 1;
                                    }
                                    break;
                            }
                            break;
                        case 'option_hd':
                            switch (method) {
                                case 'option_asc':
                                    if (a.level_hard < b.level_hard) {
                                        return -1;
                                    } else if (a.level_hard > b.level_hard) {
                                        return 1;
                                    } else {
                                        if (a.song_cate < b.song_cate) {
                                            return -1;
                                        } else if (a.song_cate > b.song_cate) {
                                            return 1;
                                        } else {
                                            return a.song_no < b.song_no ? -1 : 1;
                                        }
                                    }
                                    break;
                                case 'option_desc':
                                    if (a.level_hard < b.level_hard) {
                                        return 1;
                                    } else if (a.level_hard > b.level_hard) {
                                        return -1;
                                    } else {
                                        if (a.song_cate < b.song_cate) {
                                            return 1;
                                        } else if (a.song_cate > b.song_cate) {
                                            return -1;
                                        } else {
                                            return a.song_no < b.song_no ? 1 : -1;
                                        }
                                    }
                                    break;
                                default:
                                    if (a.level_hard < b.level_hard) {
                                        return -1;
                                    } else if (a.level_hard > b.level_hard) {
                                        return 1;
                                    } else {
                                        if (a.song_cate < b.song_cate) {
                                            return -1;
                                        } else if (a.song_cate > b.song_cate) {
                                            return 1;
                                        } else {
                                            return a.song_no < b.song_no ? -1 : 1;
                                        }
                                    }
                                    break;
                            }
                            break;
                        case 'option_ex':
                            switch (method) {
                                case 'option_asc':
                                    if (a.level_expert < b.level_expert) {
                                        return -1;
                                    } else if (a.level_expert > b.level_expert) {
                                        return 1;
                                    } else {
                                        if (a.song_cate < b.song_cate) {
                                            return -1;
                                        } else if (a.song_cate > b.song_cate) {
                                            return 1;
                                        } else {
                                            return a.song_no < b.song_no ? -1 : 1;
                                        }
                                    }
                                    break;
                                case 'option_desc':
                                    if (a.level_expert < b.level_expert) {
                                        return 1;
                                    } else if (a.level_expert > b.level_expert) {
                                        return -1;
                                    } else {
                                        if (a.song_cate < b.song_cate) {
                                            return 1;
                                        } else if (a.song_cate > b.song_cate) {
                                            return -1;
                                        } else {
                                            return a.song_no < b.song_no ? 1 : -1;
                                        }
                                    }
                                    break;
                                default:
                                    if (a.level_expert < b.level_expert) {
                                        return -1;
                                    } else if (a.level_expert > b.level_expert) {
                                        return 1;
                                    } else {
                                        if (a.song_cate < b.song_cate) {
                                            return -1;
                                        } else if (a.song_cate > b.song_cate) {
                                            return 1;
                                        } else {
                                            return a.song_no < b.song_no ? -1 : 1;
                                        }
                                    }
                                    break;
                            }
                            break;
                        case 'option_mas':
                            switch (method) {
                                case 'option_asc':
                                    if (a.level_master < b.level_master) {
                                        return -1;
                                    } else if (a.level_master > b.level_master) {
                                        return 1;
                                    } else {
                                        if (a.song_cate < b.song_cate) {
                                            return -1;
                                        } else if (a.song_cate > b.song_cate) {
                                            return 1;
                                        } else {
                                            return a.song_no < b.song_no ? -1 : 1;
                                        }
                                    }
                                    break;
                                case 'option_desc':
                                    if (a.level_master < b.level_master) {
                                        return 1;
                                    } else if (a.level_master > b.level_master) {
                                        return -1;
                                    } else {
                                        if (a.song_cate < b.song_cate) {
                                            return 1;
                                        } else if (a.song_cate > b.song_cate) {
                                            return -1;
                                        } else {
                                            return a.song_no < b.song_no ? 1 : -1;
                                        }
                                    }
                                    break;
                                default:
                                    if (a.level_master < b.level_master) {
                                        return -1;
                                    } else if (a.level_master > b.level_master) {
                                        return 1;
                                    } else {
                                        if (a.song_cate < b.song_cate) {
                                            return -1;
                                        } else if (a.song_cate > b.song_cate) {
                                            return 1;
                                        } else {
                                            return a.song_no < b.song_no ? -1 : 1;
                                        }
                                    }
                                    break;
                            }
                            break;
                        default:
                            break;
                    }
                });
                // sort end
                $('#songs_body').html('');
                $.each(data, function (index, song) {
                    $('#songs_body').append('<div class="row"><p class="text-center">' + song.song_name + '</p></div>');
                    $('#songs_body').append('<div class="row"><p class="text-center">' + song.song_name_kr + '</p></div>');
                    $('#songs_body').append(
                        '<div class="row"><div class="col"><p class="text-center">FC / AP</p></div><div class="col"><p class="text-center d_hard">Hard</p></div><div class="col"><p class="text-center d_expert">Expert</p></div><div class="col"><p class="text-center d_master">Master</p></div></div>'
                    );
                    $('#songs_body').append(
                        '<div class="row fc_row"><div class="col d-flex justify-content-around fc_label">FC</div>' +
                            '<div class="col d-flex justify-content-around"><input class="form-check-input song_radio" type="radio" name="radio_hd_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" id="cb_fc_hd_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" value="cb_fc_hd_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" /></div><div class="col d-flex justify-content-around"><input class="form-check-input song_radio" type="radio" name="radio_ex_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" id="cb_fc_ex_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" value="cb_fc_ex_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" /></div><div class="col d-flex justify-content-around"><input class="form-check-input song_radio" type="radio" name="radio_mas_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" id="cb_fc_mas_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" value="cb_fc_mas_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" /></div></div>'
                    );
                    $('#songs_body').append(
                        '<div class="row ap_row"><div class="col d-flex justify-content-around ap_label">AP</div>' +
                            '<div class="col d-flex justify-content-around"><input class="form-check-input song_radio" type="radio" name="radio_hd_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" id="cb_ap_hd_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" value="cb_ap_hd_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" /></div><div class="col d-flex justify-content-around"><input class="form-check-input song_radio" type="radio" name="radio_ex_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" id="cb_ap_ex_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" value="cb_ap_ex_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" /></div><div class="col d-flex justify-content-around"><input class="form-check-input song_radio" type="radio" name="radio_mas_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" id="cb_ap_mas_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" value="cb_ap_mas_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" /></div></div>'
                    );
                    $('#songs_body').append(
                        '<div class="row reset_row"><div class="col d-flex justify-content-around reset_btn_wrapper">' +
                            '<button id="reset_btn_' +
                            song.song_cate +
                            '_' +
                            song.song_no +
                            '" class="btn btn-primary reset_btn">Reset</button>' +
                            '</div></div><hr />'
                    );
                });
                // 체크된 checkbox를 목록에 저장
                $('.song_radio').on('change', function (e) {
                    e.preventDefault();
                    let v = $(this).attr('id');
                    let unchecked_val;
                    switch (v.split('_')[1]) {
                        case 'fc':
                            unchecked_val = v.split('_')[0] + '_ap_' + v.split('_')[2] + '_' + v.split('_')[3] + '_' + v.split('_')[4];
                            if (checked_val.has(unchecked_val)) {
                                checked_val.delete(unchecked_val);
                            }
                            checked_val.add(v);
                            break;
                        case 'ap':
                            unchecked_val = v.split('_')[0] + '_fc_' + v.split('_')[2] + '_' + v.split('_')[3] + '_' + v.split('_')[4];
                            if (checked_val.has(unchecked_val)) {
                                checked_val.delete(unchecked_val);
                            }
                            checked_val.add(v);
                            break;
                        default:
                            break;
                    }
                    console.log(checked_val);
                });
                // checked_val set의 값 불러오기
                for (const item of checked_val) {
                    if (!$('#' + item).is(':checked')) {
                        $('#' + item).attr('checked', true);
                    }
                }
                // Radio 리셋
                $('.reset_btn').on('click', function (e) {
                    e.preventDefault();
                    let reset_btn_id = $(this).attr('id');
                    let comp = reset_btn_id.split('_')[2] + '_' + reset_btn_id.split('_')[3];
                    for (const value of checked_val) {
                        if (value.endsWith(comp)) {
                            $('#' + value).prop('checked', false);
                            checked_val.delete(value);
                        }
                    }
                    console.log(checked_val);
                });
            },
            error: function () {
                console.log('서버 연결 실패');
            },
        });
    };
    check.sort(sort_by, sort_method);
    // JSON 저장
    $('#save_to_json').on('click', function (e) {
        e.preventDefault();
        let json_list = [];
        let s_json;
        for (const item of checked_val) {
            let data = new Object();
            let marker = item.split('_')[1];
            let difficulty = item.split('_')[2];
            let song_cate = Number(item.split('_')[3]);
            let song_no = Number(item.split('_')[4]);
            switch (marker) {
                case 'fc':
                    marker = 'fc';
                    break;
                case 'ap':
                    marker = 'ap';
                    break;
                default:
                    break;
            }
            switch (difficulty) {
                case 'hd':
                    difficulty = 'hard';
                    break;
                case 'ex':
                    difficulty = 'expert';
                    break;
                case 'mas':
                    difficulty = 'master';
                    break;
                default:
                    break;
            }
            data.song_no = song_no;
            data.song_cate = song_cate;
            data.difficulty = difficulty;
            data.marker = marker;
            data.score_col = marker + '_' + difficulty;
            json_list.push(data);
        }
        s_json = JSON.stringify(json_list);
        // console.log(s_json);
        $.ajax({
            url: '/check_submit',
            type: 'POST',
            data: s_json,
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
        });
        // file download
        const download_file = 'data:text; charset=UTF-8,' + s_json;
        const encodedUri = encodeURI(download_file);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'sekai_force_data.json');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
