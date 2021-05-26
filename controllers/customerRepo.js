const {v4: uuidv4} = require('uuid');
const fetch = require("node-fetch");

module.exports = app => {
  const customerRepoDB = start();

  let api_data= {}

  let repos=[]

  async function start(){
    const api = async () => {
        const response = await fetch('https://api.github.com/users/takenet/repos');
        const data = await response.json();
        return data;
    }

    api_data = await api();

    api_data.map(function(item){
      if(item.language=="C#"){
        repos.push(item)
      return item.language; 
      }
    });

    repos.sort(function (a, b){
      return (a.created_at > b.created_at) ? 1 : ((b.created_at > a.created_at) ? -1 : 0);
    });

    console.log(repos)
    return api_data
  }

  const controller = {};

    controller.listCustomerRepo = (req, res) => res.status(200).json(repos);

    controller.saveCustomerRepo = (req, res) => {
      customerRepoMock.data.push({
        avatar: "req.body.avatar_url",
        name: req.body.name,
        description: req.body.description,
        created_at: req.body.created_at,
        language: req.body.language,
      });

      res.status(201).json(customerRepoMock);
    };

  return controller;
}