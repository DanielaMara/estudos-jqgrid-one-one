using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JQGrid.Controllers
{
    public class AlunoController : Controller
    {
        //
        // GET: /Aluno/

        public ActionResult Index()
        {
            return View();
        }

        public string GetAll()
        {
            string json = "{'page':1,'total':1,'records':'2','rows':[{'id':'1','cell':['1','mydata1']},{'id':'2','cell':['2','mydata2']}]}";
            return JsonConvert.SerializeObject(json);
        }

    }
}
