const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getUser('bradtraversy')

async function getUser(username) {
  try {  
    const {data} = await axios(APIURL + username)
     createUserCard(data);  

  } catch(err) {
    console.log(err)
  }
  

  }

  function createUserCard(user) {
    const cardHTML = `
    <div class="card">
            <img src="https://randomuser.me/api/portraits/men/24.jpg" alt="" class="avatar">
            <div class="user-info">
                <h2>johndoe</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, neque.</p>
                <ul>
                    <li>300<strong>Followers</strong></li>
                    <li>100<strong>Following</strong></li>
                    <li>30<strong>Repos</strong></li>
                </ul>
                <div id="repos">
                    <a href="#" class="repo">Repo 1</a>
                    <a href="#" class="repo">Repo 2</a>
                    <a href="#" class="repo">Repo 3</a>
                </div>
            </div>

        </div>
        `;

        main.innerHTML = cardHTML;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if(user) {
      getUser(user)

      search.value='';
    }
  })