let main_index = {};
let sort_method = 'option_asc';
let sort_by = 'option_default';

$(function () {
    // ASC, DESC
    $('input[name=radio_sort_method]').on('change', function (e) {
        e.preventDefault();
        sort_method = this.value;
        main_index.sort(sort_by, sort_method);
    });
    // Default, Hard, Expert, Master
    $('input[name=radio_btn]').on('change', function (e) {
        e.preventDefault();
        sort_by = this.value;
        main_index.sort(sort_by, sort_method);
    });
    main_index.sort = function (base, method) {
        // Ajax
        $.ajax({
            url: '/index_action',
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
                        '<div class="row"><div class="col"><p class="text-center d_easy">Easy</p><p class="text-center">' +
                            song.level_easy +
                            '</p></div><div class="col"><p class="text-center d_normal">Normal</p><p class="text-center">' +
                            song.level_normal +
                            '</p></div><div class="col"><p class="text-center d_hard">Hard</p><p class="text-center">' +
                            song.level_hard +
                            '</p></div><div class="col"><p class="text-center d_expert">Expert</p><p class="text-center">' +
                            song.level_expert +
                            '</p></div><div class="col"><p class="text-center d_master">Master</p><p class="text-center">' +
                            song.level_master +
                            '</p></div></div><hr />'
                    );
                });
            },
            error: function () {
                console.log('서버 연결 실패');
            },
        });
    };
    main_index.sort(sort_by, sort_method);
});
