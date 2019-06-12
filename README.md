This is an excellent 
### basic starter template 
for making projects with 
### Postgres/graphql via docker
together with 
### react and apollo. 

![alt text](https://github.com/stanfordv/graphql-template/blob/master/backend.png)
![alt text](https://github.com/stanfordv/graphql-template/blob/master/frontend.png)

The entire backend is set up in a simple docker script. The docker script initial sets up the postgres server on port 5432 and then sets up graphql on 8080. It downloads the Hasura graphical user interface where it is possible create sql tables on the fly and then read those tables via graphql calls. 


### The frontend is initialised from create-react-app. Apollo has been added to make the connection to graphql simple and complete. The code for this is in App.js and components/BookList.js. after npm run start check localhost:3000 . To check that its working, book titles should be shown in the browser.


### If you need some starter sql you can start with this. After running docker-compose up goto localhost:8080 , navigate to DATA > SQL and dump the data below into the sql field there.

### Structure

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;


CREATE TABLE public.books (
    pid character varying(255) NOT NULL,
    unit_id character varying(255),
    work_id character varying(255),
    bibliographic_record_id integer,
    creator character varying(255),
    title character varying(255),
    title_full character varying(255),
    pages integer,
    type character varying(255),
    work_type character varying(255),
    language character varying(255),
    items integer,
    libraries integer,
    subject character varying(255),
    genre character varying(255),
    first_edition_year integer DEFAULT 0,
    literary_form character varying(255),
    taxonomy_description text,
    description text,
    loans integer
);


ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (pid);

###


### Table data


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;


INSERT INTO public.books VALUES ('870970-basis:46484215', 'unit:36000737', 'work:32550131', -1, '', 'Hvem slog min far ihjel', 'Hvem slog min far ihjel', 0, 'Bog', 'book', '', 9, 9, '', '', 0, '', 'Vred, melankolsk og vemodig
Fortælling om identitet i Frankrigs arbejderklassen', '', 0);
INSERT INTO public.books VALUES ('870970-basis:46608755', 'unit:36119093', 'work:32651763', -1, '', 'Huset i Buckley Street', 'Huset i Buckley Street', 0, 'Bog', 'book', '', 74, 62, '', '', 0, '', 'Varm, hyggelig og romantisk
Hyggelig kærlighedsromaner der udspiller sig i England', '', 0);
INSERT INTO public.books VALUES ('870970-basis:46621646', 'unit:36124434', 'work:32655313', -1, '', 'Statister', 'Statister', 0, 'Bog', 'book', '', 0, 0, '', '', 0, '', 'Psykologisk, melankolsk og reflekterende', '', 0);
INSERT INTO public.books VALUES ('870970-basis:25204298', 'unit:968225', 'work:814107', -1, 'D. B. C. Pierre', 'Vernon G. Little', 'Vernon G. Little : en komedie fra det 21. århundrede med døden i en af hovedrollerne', 346, 'Bog', 'book', 'Dansk', 106, 71, '', '', 0, '', 'Følelsesladet humor der udspiller sig i USA
Realistisk spænding om skoleskyderier', '', 198);
INSERT INTO public.books VALUES ('870970-basis:25188233', 'unit:967172', 'work:813232', -1, 'Gayle Lynds, Robert Ludlum', 'Attentat i Paris', 'Attentat i Paris', 461, 'Bog', 'book', 'Dansk', 55, 42, '', '', 0, '', 'Eventyrlig spænding fra Paris'' storbyen
Realistisk spænding om nationalisme', '', 790);
INSERT INTO public.books VALUES ('870970-basis:25188268', 'unit:967173', 'work:813234', -1, 'Robert Ludlum', 'Janson-direktivet', 'Janson-direktivet', 623, 'Bog', 'book', 'Dansk', 47, 38, '', '', 0, '', 'Voldelig spænding fra USAs storbyen
Realistisk spænding om international terrorisme', '', 730);
INSERT INTO public.books VALUES ('870970-basis:25197925', 'unit:967877', 'work:813826', -1, 'Ole Christiansen (f. 1940-01-31)', 'Herrens tjener', 'Herrens tjener', 188, 'Bog', 'book', 'Dansk', 2, 1, '', '', 0, '', 'Eventyrlig historiske romaner der udspiller sig i Danmark
Realistisk biografiske romaner om kongemagt', '', 5);
INSERT INTO public.books VALUES ('870970-basis:25245547', 'unit:970341', 'work:810379', -1, 'Barbara Vine', 'Blodlægen', 'Blodlægen : roman', 444, 'Bog', 'book', 'Dansk', 168, 87, '', '', 0, '', 'Beretning om adel i Englands overklassen
Anderledes biografiske romaner fra Englands overklassen', '', 961);
INSERT INTO public.books VALUES ('870970-basis:46543211', 'unit:36078359', 'work:32616424', -1, '', 'Italienske forbindelser', 'Italienske forbindelser', 0, 'Bog', 'book', '', 1, 1, '', '', 0, '', 'Romantisk, erotisk og spændende
Fortælling i hurtig tempo', '', 0);
INSERT INTO public.books VALUES ('870970-basis:25248740', 'unit:970565', 'work:816006', -1, 'Martin Jensen (f. 1946)', 'Magtspor', 'Magtspor : en Eske Litle-roman', 277, 'Bog', 'book', 'Dansk', 140, 80, '', '', 0, '', 'Historie fra middelalderens provinsen
Oplysende historiske romaner der udspiller sig i Assens', '', 1160);
INSERT INTO public.books VALUES ('870970-basis:25244036', 'unit:970271', 'work:815778', -1, 'Guus Kuijer', 'En and ad gangen', 'En and ad gangen', 111, 'Bog', 'book', 'Dansk', 2, 2, '', '', 0, '', 'Skæv humor der udspiller sig i Holland
Realistisk humor om ænder', '', 0);

###
