let check = {};
let sort_method = 'option_asc';
let sort_by = 'option_default';
let checked_val = [];

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
                            '<div class="col d-flex justify-content-around"><input class="form-check-input song_cb" type="checkbox" name="cb_fc_hd_' +
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
                            '" /></div><div class="col d-flex justify-content-around"><input class="form-check-input song_cb" type="checkbox" name="cb_fc_ex_' +
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
                            '" /></div><div class="col d-flex justify-content-around"><input class="form-check-input song_cb" type="checkbox" name="cb_fc_mas_' +
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
                            '<div class="col d-flex justify-content-around"><input class="form-check-input song_cb" type="checkbox" name="cb_ap_hd_' +
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
                            '" /></div><div class="col d-flex justify-content-around"><input class="form-check-input song_cb" type="checkbox" name="cb_ap_ex_' +
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
                            '" /></div><div class="col d-flex justify-content-around"><input class="form-check-input song_cb" type="checkbox" name="cb_ap_mas_' +
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
                            '" /></div></div><hr />'
                    );
                });
                // 체크된 checkbox를 목록에 저장
                $('.song_cb').on('change', function (e) {
                    e.preventDefault();
                    let v = this.value;
                    console.log(v);
                    if ($('#' + v).is(':checked')) {
                        console.log(v + ' checked!');
                        checked_val.push(v);
                    } else {
                        console.log(v + ' unchecked!');
                        checked_val.splice(checked_val.indexOf(v), 1);
                    }
                    console.log(checked_val);
                });
                // checkbox 목록의 값 불러오기
                $.each(checked_val, function (index, item) {
                    if (!$('#' + item).is(':checked')) {
                        $('#' + item).attr('checked', true);
                    }
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
        $.each(checked_val, function (index, item) {
            let data = new Object();
            let marker = item.split('_')[1];
            let difficulty = item.split('_')[2];
            let song_cate = Number(item.split('_')[3]);
            let song_no = Number(item.split('_')[4]);
            switch (marker) {
                case 'fc':
                    marker = 'fc_';
                    break;
                case 'ap':
                    marker = 'ap_';
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
            difficulty = marker + difficulty;
            data.song_no = song_no;
            data.song_cate = song_cate;
            data.difficulty = difficulty;
            json_list.push(data);
        });
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
