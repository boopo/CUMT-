define({ "api": [
  {
    "type": "Post",
    "url": "https://www.lvyingzhao.cn/dianfei",
    "title": "",
    "group": "接口",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "home",
            "description": "<p>宿舍楼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "num",
            "description": "<p>门号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"home\": \"梅2楼\"\n \"num\":\"B4222\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"status\": \"200\",\n  \"msg\": \"ok\"\n  \"data\": \"[\"227.43\"]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/file1.js",
    "groupTitle": "接口",
    "name": "PostHttpsWwwLvyingzhaoCnDianfei"
  }
] });
