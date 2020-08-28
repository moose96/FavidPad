import React from 'react';

import './About.scss';

const About = () => (
  <div className="about">
    <h2>About</h2>
    <p>Ten projekt jest tworzony w ramach kursu React.js prowadzonego przez Szkołę Reacta. Jest to prosta platforma z filmami, 
      która pozwala użytkownikom odtwarzać ich ulubione filmy zapisane w bazie danych.</p>
    <h3>Założenia</h3>
    <p>Aplikacja powinna wyświetlić filmy z zapisanym tytułem i opisem. Dla wygody aplikacja powinna umożliwić użytkownikom dodawanie 
      filmów do bazy używając linków powszechnie dostępnych, na przykład: <i>https://youtube.com/watch?v=somevideo</i> 
      i automatycznie zamienić na prawidłowy adres używany w odtwarzaczu: <i>https://youtube.com/embed/somevideo</i></p>
    <h3>Instrukcja użytkowania</h3>
    <h4>Strona główna</h4>
    <p>Poniżej nagłówka znajduje się pasek narzędzi z kontrolkami pozwalającymi zmieniać różne ustawienia. Na ten moment jest tam 
      tylko przycisk z ikoną głośnika. Umożliwia on globalne włączenie lub wyłączenie odtwarzacza efektów.</p>
    <p>Pod paskiem narzędzi jest <i>widok karuzeli</i>, który pokazuje dostępne filmy. Użytkownik może przewijać filmy klikając na 
    film, który chce obejrzeć. Następnie ponowne kliknięcie w film umiejscowiony na środku przeniesie użytkownika do strony z 
    podglądem. Filmy można przewijać też używając kółka myszy lub przesuwając palcem po ekranie (w przypadku ekranów dotykowych). 
    Każdy film w tym widoku ma dwa przyciski: z ikoną ołówka oraz z ikoną krzyżyka. Pierwszy umożliwia edycję informacji o filmie, 
    a drugi pozwala na usunięcie filmu, jednak zanim to się stanie użytkownik musi potwierdzić akcję.</p>
    <p>Pod <i>widokiem karuzeli</i> znajduje się drugi pasek narzędzi. W nim można znaleźć kontrolki do przełączania stron, a 
    także pole tekstowe do wpisywania cyfr, które określa ilość elementów na stronie.</p>
    <p>Pod ostatnim paskiem narzędzi znajduje się przycisk, któy przenosi użytkownika na stronę z formularzem, gdzie można dodać
       nowe filmy.</p>
    <p>Na samym dole znajduje się stopka z linkami do mojego konta GitHub oraz do tej strony.</p>
    <h4>Widok filmu</h4>
    <p>Strona jest podzielona na dwie sekcje: lewa zawiera odtwarzacz, który pozwala użytkownikowi oglądać filmy oraz prawa, która 
      zawiera informacje o filmie oraz listę kolejnych filmów.</p>
    <h4>Formularz tworzenia/edycji</h4>
    <p>Formularz zawiera trzy pola: tytuł, adres url oraz opis. Wszystkie z nich są wymagane. Gdy użytkownik wpisze adres url w 
      odpowiednie pole i kliknie poza nie, aplikacja automatyzcznie pobierze miniaturkę filmu w celu umożliwienia użytkownikowi 
      sprawdzenia, czy to jest właściwy film.</p>
    <h4>Werja pionowa strony</h4>
    <p>Gdy użytkownik obróci ekran do układu pionowego, aplikacja nieznacznie zmieni swój wygląd. <i>Widok karuzeli</i> na stronie 
    głównej będzie zastąpiony widokiem listy. Ten widok ma taką samą funkcjonalność jak poprzedni. W nagłówku pojawią się dwa 
    przyciski, które pozwalają użytkownikowi na nawigację po historii przeglądania.</p>
    <h4>Odtwarzacz efektów dźwiękowych</h4>
    <p>Na tą chwilę odtwarzacz efektów dźwiekowych odtwarza dźwięk w momencie, gdy użytkownik najedzie kursorem myszy na film w 
      widoku karuzeli, oraz na przycisk <quote>Dodaj</quote>.</p>
  </div>
);

export default About;