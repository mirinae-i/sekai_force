package com.mirinae.sekai_force.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.mirinae.sekai_force.domain.SongInfoAllVO;
import com.mirinae.sekai_force.service.MainService;

@Controller
@RequestMapping("/*")
public class MainController {

    Logger logger = LoggerFactory.getLogger(MainController.class);

    @Autowired
    public MainService service;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    private String main() {
        logger.info("** MainController - main() **");
        return "/index";
    }

    @RequestMapping(path = "/index_action", method = RequestMethod.POST, produces = "application/json; charset=UTF-8")
	@ResponseBody
	private List<SongInfoAllVO> mainAction() {
		logger.info("** MainController - mainAction() **");
		List<SongInfoAllVO> songInfoList = service.showSongInfoAll();
		return songInfoList;
	}

    @RequestMapping(path = "/check", method = RequestMethod.GET)
    private String check() {
        logger.info("** MainController - check() **");
        return "/check";
    }

    @RequestMapping(path = "/check_action", method = RequestMethod.POST, produces = "application/json; charset=UTF-8")
    @ResponseBody
    private List<SongInfoAllVO> checkAction() {
        logger.info("** MainController - checkAction() **");
        List<SongInfoAllVO> scoreAllList = service.showSongInfoAll();
        return scoreAllList;
    }

    @RequestMapping(path = "/check_submit", method = RequestMethod.POST)
    @ResponseBody
    private void checkSubmit(@RequestBody String json) {
        logger.info("** MainController - checkSubmit() **");
        logger.info(json);
    }

    @RequestMapping(path = "/best_39", method = RequestMethod.GET)
	private String best39() {
		logger.info("** MainController - best_39() **");
		return "/best_39";
	}

    @RequestMapping(path = "/best_39_action", method = RequestMethod.POST, produces = "application/json; charset=UTF-8")
    @ResponseBody
    private String best39Action(MultipartHttpServletRequest request) {
        return service.best39Action(request);
    }

    @RequestMapping(path = "/about", method = RequestMethod.GET)
	public String about() {
		logger.info("** MainController - about() **");
		return "/about";
	}

}
