import "./AboutDonuts.scss";
import image1 from "../../../assets/about-donuts/DoeDoughnuts_ourdonuts_caring.webp";
import image2 from "../../../assets/about-donuts/DoeDoughnuts_ourdonuts-allergens.webp";

const AboutDonuts = () => {
  return (
    <div className="about-us">
      <section>
        <h1>O pączkach</h1>
        <p className="description">
          Używanie wysokiej jakości składników jest dla nas w DOE sprawą najwyższej wagi. W miarę możliwości pozyskujemy składniki lokalnie i zawsze od
          dostawców o niezawodnej reputacji. Większość naszych nadzień i dodatków do pączków przygotowujemy całkowicie od podstaw w naszym sklepie Gray Lynn
          (np. dżemy, karmel, krem, kruszonka, pianki marshmallow).
        </p>
        <div className="background">
          <div className="image">
            <img src={image1}></img>
          </div>
        </div>
      </section>
      <section>
        <h2>Dbamy o twoje pączki</h2>
        <p className="description">
          Dbanie o pączki jest ważne, aby móc cieszyć się nimi jak najlepiej. Ponieważ pączki są produktem smażonym w głębokim tłuszczu, to ich trwałość jest
          krótsza niż innych wypieków. Aby mieć pewność, że pączki uzyskają najlepszy smak i konsystencję, zalecamy zjedzenie ich tego samego dnia, w którym je
          otrzymałeś.
        </p>
        <p className="description">
          Jeśli nie możesz od razu zjeść pączków, sugerujemy przechowywać je w chłodnym, suchym miejscu i z dala od bezpośredniego światła słonecznego. Unikaj
          wkładania ich do lodówki, ponieważ może to wpłynąć na konsystencję i smak pączków. Jeśli musisz przechowywać je dłużej niż 5 godzin, a jest ciepły
          dzień, możesz włożyć je do lodówki.
        </p>
        <p className="description">
          Kiedy już będziesz gotowy, aby je zjeść, po prostu wyjmij je na godzinę przed spożyciem i poczekaj, aż osiągną temperaturę pokojową, zanim zaczniesz
          się nimi delektować. Pamiętaj, że jeśli Twój pączek zawiera świeże nadzienie lub polewę z kremu lub kremu, MUSISZ przechowywać go w lodówce, aby
          uniknąć zepsucia.
        </p>
        <p className="description">
          Pamiętaj, że nasze pączki powstają z wysokiej jakości składników i mają dużo serca i duszy, więc ciesz się nimi, póki są świeże i najlepsze!
        </p>
        <div className="background-1">
          <div className="image">
            <img src={image2}></img>
          </div>
        </div>
      </section>
      <section>
        <h2>Alergeny i wymagania dietetyczne</h2>
        <p className="description">
          Żelatyna jest powszechnym składnikiem wielu deserów i wypieków, ale pochodzi z kolagenu zwierzęcego, który może nie być odpowiedni w przypadku
          niektórych ograniczeń lub preferencji dietetycznych. Szanujemy różnorodne potrzeby naszych klientów, dlatego zdecydowaliśmy się wykluczyć żelatynę z
          naszych receptur.
        </p>
        <p className="description">
          W DOE poważnie podchodzimy do alergii i nietolerancji pokarmowych i staramy się zapewnić naszym klientom jak najwięcej informacji o naszych
          produktach. Jeśli masz jakiekolwiek wątpliwości lub pytania dotyczące alergenów, nie wahaj się z nami skontaktować. Chcemy, aby wszyscy nasi klienci
          mogli bezpiecznie i bez żadnych zmartwień cieszyć się naszymi pysznymi pączkami i ciasteczkami
        </p>
        <p className="description">
          Wszystkie nasze produkty powstają w kuchni, w której używa się orzechów, nabiału, jajek i glutenu, dlatego istnieje ryzyko zanieczyszczenia krzyżowego
        </p>
        <p className="description">
          Klientom ze specyficznymi alergiami lub wymaganiami dietetycznymi zalecamy skontaktowanie się z naszym personelem, który może udzielić bardziej
          szczegółowych informacji na temat składników stosowanych w naszych produktach. Od czasu do czasu oferujemy również opcje wegańskie, ale należy
          pamiętać, że są one przygotowywane w tej samej kuchni, co nasze standardowe produkty.
        </p>
        <p className="description">
          Zależy nam na używaniu wysokiej jakości składników i tworzeniu produktów, którymi każdy może się cieszyć. Rozumiemy, że niektórzy klienci mogą mieć
          wątpliwości dotyczące stosowania żelatyny w wypiekach i chcemy zapewnić, że nie używamy żelatyny w żadnym z naszych pączków ani ciasteczek.
        </p>
      </section>
    </div>
  );
};

export default AboutDonuts;
