<template>
  <div id="container">
    <div class="row col-12">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <span id="zarciofota"
          >W Culinary wierzymy, że jedzenie to coś więcej niż sposób na
          zaspokojenie głodu. To sposób na docenienie ukochanej osoby. To sposób
          na wspólne spędzanie czasu. To sposób na zadbanie o swoje ciało i
          duszę. To w końcu okazja do pochwalenia się swoją <b>Żarciofotą!</b>
        </span>
        <br />
        <span id="todoapp"
          >Z nami stworzysz również własną
          <router-link to="t" target="_blank">listę zakupów</router-link>
        </span>

        <div class="w-100"></div>
        <br />
        <span id="zarciofota2"
          >A po jedzeniu zapraszamy do działu
          <router-link to="r" target="_blank">Rozrywka</router-link>
        </span>
        <p><br /></p>

        <blockquote class="offset-sm-4">
          <p>
            <em>"Nie ma bardziej szczerej miłości niż miłość do jedzenia."</em>
          </p>
          <footer>
            -
            <a href="https://lubimyczytac.pl/cytat/64049">
              George Bernard Shaw</a
            >
          </footer>
        </blockquote>
        <p><br /></p>
        <!--
        <div id="choice">
          <p id="h">Co dziś jemy?</p>
          <form>
            <div id="inchoice">
              <div class="mb-3 item">
                <input
                  type="text"
                  id="uname"
                  class="form-control"
                  name="name"
                  placeholder="Wpisz nazwę składnika"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Wpisz nazwę skladnika'"
                
                <span class="addBtn btn-outline-success">Dodaj</span>
                <button
                  type="submit"
                  id="addBtn"
                  class="btn btn-outline-success mb-4"
                >
                  Dodaj
                </button>
              </div>
              <div class="item">
                <input type="text" class="item-input form-control" disabled />
                <button
                  type="submit"
                  id="editButton"
                  class="btn btn-outline-success mb-4"
                >
                  Edytuj
                </button>
                <button
                  type="submit"
                  id="removeButton"
                  class="btn btn-outline-success mb-4"
                >
                  Usuń
                </button>

                <span class="editButton btn-outline-success">Edytuj</span>
                <span class="removeButton btn-outline-success">Usuń</span>
                <div class="w-100"></div>
              </div>
              
              <span class="addBtn tn-outline-light mb-4">Szukaj</span>
              <button
                type="submit"
                id="searchButton"
                class="btn btn-outline-success mb-4"
              >
                Szukaj
              </button>
            </div>
          </form>-->
      </div>
    </div>
    <div class="col-md-2"></div>
  </div>
</template>

<script>
import Rozrywka from "./Rozrywka/Rozrywka";
import TodoApp from "./TodoApp";
export default {
  name: "Content",
  components: {
    Rozrywka,
    TodoApp,
  },
};
</script>


<style scoped>
#zarciofota,
#zarciofota2,
#todoapp {
  background-color: black;
  color: rgba(230, 227, 227, 0.986);
  border-color: black;
  font-size: 18px;
  margin-top: 70px;
  text-decoration: none;
}
#zarciofota2 {
  margin-top: 30px;
  margin-bottom: 30px;
}

blockquote {
  background-color: black;
  width: 270px;
  color: blanchedalmond;
  border-color: black;
  margin-top: 50px;
  padding: 3vh;
  box-shadow: 5px 5px 5px rgb(34, 34, 34);
  margin-bottom: 100px;
}

#choice {
  background-color: rgba(215, 215, 215, 0.4);
  font-size: 30px;
  padding: 50px;
  margin-bottom: 50px;
  color: black;
}
#h {
  letter-spacing: 3px;
  font-size: 48px;
  margin-bottom: 50px;
}

.item {
  margin-left: 10px;
  margin-right: 10px;
}

input {
  font-size: 24px;
  background-attachment: #666;
  border-radius: 10px;
  margin-right: 20px;
  margin-right: 20px;
  height: 10vh;
}

#searchButton {
  border-radius: 10px;
  width: 45vh;
  height: 50px;
}

#addBtn,
#removeButton,
#editButton {
  padding: 10px;
  width: 100px;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 3vh;

  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 10px;
}
</style>