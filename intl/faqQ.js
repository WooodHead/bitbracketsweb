export default {
  en: [
    {
      title: 'Getting started',
      question: 'What is Bitbrackets.io?',
      answer:
        'BitBrackets is a Smart Contract driven platform for creating prediction pools for sporting events using digital money (crypto currencies). You can create your own pools and invite your friends and family and try to predict the score for upcoming sporting events. The player or players that guessed the most results win the pool completely secured by the Smart Contracts. ',
    },
    {
      question: 'What do I need to create pools and start playing with my friends?',
      answerbullet: [
        {
          bulletfirst:
            'A computer or laptop running the desktop versions of Chrome or Firefox browser.',
          bulletsecond:
            'MetaMask, software that allows you to interact with apps that use digital money (crypto currencies).',
          bulletthird:
            'Ether, is a digital payment that is used as money in BitBrackets to create pools and play by sending predictions to any pool.',
        },
      ],
    },
    {
      question: 'How to Install Metamask to play with digital money?',
      answer:
        'MetaMask is like a digital wallet to hold your digital money which you can use to play in BitBrackets different pools. You will need to put Ether (the supported digital money in BitBrackets) into MetaMask in the same  way you put real money into your real wallet to be able to play in pools or create a new one. ',
      answer1: 'You can download it here.http://somewebsite.com/somepage.asp',
      answer2:
        'Warning: With digital money you are responsible for being your own bank. Take precautions of not revealing your password and seed words to anyone else or you may lose all your funds.',
    },
    {
      question: 'How do I get Ether (digital money) to play?',
      answer:
        'You will need to purchase ETH from an exchange, and then transfer the ETH from your exchange  wallet to your MetaMask wallet. https://blockgeeks.com/guides/best-cryptocurrency-exchanges/ ',
      answer1:
        'You cannot use USD with BitBrackets pools — any currencies need to be converted into ETH first.',
    },
    {
      title: 'How to play',
      question: 'What is a prediction pool?',
      answer:
        'A prediction pool is a tournament where several players predict the outcome of each match within a big upcoming public sporting event e.g. World Cup, NCAA March Madness, etc. Each player joins the pool by putting a predefined amount of money determined by all participants usually. The player with the most successful predictions wins the prize pool.',
    },
    {
      question: 'How do I create a pool?',
      answer:
        'Any one is able to create a new pool for the defined selected contests. For our beta we are only supporting the Soccer World Cup in 2018. In the future we plan to support many other sporting events.',
      answer1:
        'Each contest has a defined flat fee the player needs to pay to be able to create a pool, the flat fee may vary per contest (event). The player who creates a new pool is called the pool manager (or just manager) and needs to define the entry fee that each player will need to participate and send predictions. Each pool is a separate Smart Contract in our platform.',
    },
    {
      question:
        'Ok, I have created a pool, now how do I tell my friends and invite them to join in?',
      answer:
        'Once you create a pool the platform will give you a unique invite URL that you can share with your friends. Once they click on that URL they will be taken to your Pool’s specific page so they can start entering their predictions and participate.',
    },
    {
      question:
        'I got an invite link from my friend to join a pool, how do i join and send my predictions?',
      answer:
        'Once you have follow the invite link you will get to the Pool’s main page where you can start entering your predictions for each match and who will win each match. ',
    },
    {
      question: 'How do I send my predictions?',
      answer:
        'The predictions you enter are saved so you can come back and finish them once you are ready to publish them to our platform (smart contract), you will need to confirm your predictions and pay the required fee defined by the pool manager. You can review your predictions before publishing them. ',
      answer1:
        'Note: be sure to confirm them because you cannot change your predictions once they are published in our platform. (That is the nature of the Ethereum Blockchain)',
    },
    {
      question: 'How do I win the pool?',
      answer:
        'Once the contest begins, the platform will start publishing the results and players through the platform can compare their predictions against the real results. Each match correctly predicted will score a point to each player. At the end of the contest (e.g.World Cup has 64 matches) if you are the player with the highest score you can claim the pool by publishing your score. Once the contest has ended and the grace period has passed, if no one else published a higher score before this, then you win and can proceed to claim the prize in the pool! ',
    },
    {
      question: 'How much does the winner of the pool get?',
      answer:
        'The winner is awarded the complete prize pool minus the manager’s percentage fee and BitBrackets percentage fee of the prize pool.',
    },
    {
      question: 'I am the manager and I paid to create the pool, can I participate?',
      answer:
        'No, the account used to create the pool (manager) is not allowed to send predictions, you can only invite friends to play. For this reason we decide to award the manager with a percentage fee of the pool once the pool has ended and a winner has claimed the prize. ',
    },
    {
      question: 'Can I change my predictions once I published them?',
      answer: 'No, see answer for “How do I send my predictions”.',
    },
    {
      question: 'Can I see other player´s predictions?',
      answer:
        'Yes, they are all in the blockchain for anyone to see. The predictions will be available to compare through our platform as well so you can follow closely throughout the World Cup (event) who is currently winning with the highest score.',
    },
    {
      question: 'Can a player send predictions once the World Cup (event) has started?',
      answer: 'No, that would not be fair to the other players.',
    },
    {
      question:
        'Can I win the pool with a high score without publishing the high score to the platform?',
      answer:
        'If you have the highest score at the end of the event you will not be able to claim the prize unless you publish your score. Our platform is based on new Smart Contract technology that works differently from other game apps you may have played. In essence the platform needs to verify that you are really the highest score and it can only do that if you publish your high score. ',
    },
    {
      question:
        'How do I keep up to date during the event, to see who is winning with the highest score?',
      answer:
        'You will provide your email when you participate in the platform and we will enable a service to update the players on each pool of any notable changes to the scores. If you become the first player on the lead for the highest score at some point you will be notified via email. Also we would recommend to check the platform regularly to get updates on scores as well.',
    },
    {
      question:
        'Do I need to pay something if I am the highest score and want to publish to claim the prize?',
      answer:
        "Yes, publishing the high score cost digital currency (gas in blockchain speak) because it makes the platform calculate your score and verify that your predictions were accurate and you are in fact the player with the highest score. Publishing the highest score is something that we don't expect to be done from any other player  than the winner, since the highest score will be the winner we believe the cost of publishing should be justified for the winning player.",
    },

    {
      question: 'Can several players win the pool, are ties allowed?',
      answer:
        'Yes, we have designed for that possibility. All the winners will split the prize pool evenly but they will still need to publish their scores each to be counted as a winner and be able to claim the prize.',
    },
    {
      question: 'Can anyone join a pool, are pools restricted only to the people I shared my link?',
      answer:
        'For our beta the pools are open for anyone to join, we plan in the future to make the pools restricted by invitation so that the manager can only share them with players he wants to allow to participate.',
      answer1:
        'During the beta, the pools will not be available for browsing on our platform, meaning that the manager is the only one who has the link and he may choose to only share it with a specific group making the pool effectively private. If the manager decides to share the pool in a public social media site on the other hand we cannot restrict anyone to access the pool and participate at this point.',
    },
    {
      question: 'What is the grace period?',
      answer:
        'The grace period is a configured time frame after an event (e.g. World Cup) has ended for players to publish their scores and claim the prize. The contract will not be closed until a player has publish a winning score .which is also the highest score. If you published your score during the contest or after it ends, when the time for the grace period expires you will be able to claim the prize, unless someone else publishes a higher score.',
    },
    {
      question:
        'What happens if I had the highest score but did not publish it and the grace period has already expired?',
      answer:
        'Sorry, you lose your claim to the throne... sorry prize. As explained before, our platform needs for the players to publish their score to validate who is the winner. As far as the platform is concerned the winner is the player with the highest published score at the time of the expiration of the grace period.',
    },
    {
      question: 'Can I create several pools?',
      answer:
        'Yes, you can create as many pools as you want.  You may want to create an office pool and a family pool and just share each one with each separate group.',
    },
    {
      title: 'Other',
      question: 'When will the platform be ready?',
      answer:
        'We are trying our best to make it a month before the World Cup to ship our beta. We would like to launch  our beta in the test network before we launch in the main net',
    },
    {
      question: "What happens if you don't launch before the World Cup starts?",
      answer:
        'We will be really disappointed if we cannot launch for the World Cup but we are really doing this project on our spare time and we want to deliver something great and a working user experience to our players. If we cannot make our World Cup date then we will move forward with enabling the platform for future sporting events like NFL weekly pools, NCAA basketball pools, Tennis pools, Champions league, etc.',
    },
    {
      question: 'How does BitBrackets make money with the Pools?',
      answer:
        'We charged a small flat fee for every pool created and we get a percentage fee of every pool as well. The percentage fee can vary per event but most of the time will be 10% of the prize pool. ',
      answer1:
        'The fees will be used to support development of  new functionalities and improvements  of  the platform, as well the fee  will be used to host the web application',
    },
    {
      question: 'Why did you build BitBrackets?',
      answer:
        'We are a self funded team of developers that wanted to build a real working app to bring awareness to the blockchain space leveraging the World Cup which is a big media event. With that said, we also need to support servers, deploy on the blockchain which costs money and also pay for the other related development costs while we do it.',
    },
    {
      question: 'When is the ICO, where is your token, how can I buy tokens?',
      answer:
        'Sorry, no ICO, no token, just working code. Our goal is to deliver a working platform and to improve it and make it more decentralized as technology in the space progresses and allows us to make it better for our players.',
    },
    {
      question: 'How did you solve the Oracle problem?',
      answer:
        "In Blockchain development terminology the Oracle problem is how do we let the Smart Contract platform interact with external data sources, in this case a feed of the real match results and scores to validate them against the player predictions in a trustless decentralized solution? The short answer is, we didn't need to solve it at this point. We decided to make the component for publishing the results in the first iteration centralized. Meaning that we will publish the results of each match for everyone else to verify as well. We left the design open to incorporate any solution to the oracle problem that we see fit in the future, either Oraclize or a decentralized prediction markets that we can plug in with our Contracts.",
    },
    {
      question: 'Is this a scam, is it legal?',
      answer:
        'Not a scam, the Smart Contracts are open to the public to audit, if you know Solidity you can verify them here.  We cannot withdraw money from the prize pool apart from the fee. The manager is also not allowed to withdraw from the prize pool other than his designated fee. Nobody can tamper with the predictions once they are published as well so you can feel safe that you will not be cheated out of your prize pool if you are the winner. The legality of playing in prediction pools with crypto currencies should be assessed by each player under their own risk, check your local laws before participating in any pool.',
    },
    {
      question:
        'I heard that Smart Contracts can be hacked, how are you making sure we don’t lose all of our money?',
      answer:
        'Yes, a lot of widely known hacks have occurred to several famous Smart Contracts in the past. With this in mind we have designed the BitBrackets platform from the beginning with some safeguards to anticipate as best we can any potential security risk.',
      answerbullet: [
        {
          bulletfirst:
            'The pools are capped at a maximum allowed balance that we define. Meaning that no pool should have a big balance to entice potential hackers. Pools should be played for small amounts of money in our first MVP. Once the platform matures we may allow bigger balances.',
          bulletsecond:
            'The main contracts in our platform have a safety lock or sort of a panic button type of feature in case of emergency that we can use to restrict access to the contracts if an attack is detected in any of our pools.',
          bulletthird:
            'Our design makes tha main core contracts of our platform upgradable, meaning that if we find a big security risk we will proceed to lock down access to our contracts and upgrade them to fix the security issue. Upgrades to our contracts are design to keep balances and player predictions intact.',
        },
      ],
    },
    {
      question:
        "Why is this part “X” or this other “Y” part not decentralized, isn't this supposed to be a new dApp for the decentralized blockchain revolution?",
      answer:
        'We believe that the blockchain and Smart Contracts platform will be the future, but we also wanted to bring a working app to the fans who want to share the knowledge of cryptocurrencies with friends and family. Because of the timing of the World Cup and the current state of blockchain development we needed to compromise on some design decisions that may not be fully decentralized at this point. (results, oracle problem, caching data)Regardless of that, we believe a working dApp should not be any different for the end user than a normal app, and currently the state of blockchain platforms are just not there yet to fully bring a great user experience to the end user. That being said, we believe the centralized vs decentralized discussion should not be binary and we anticipated in our design to update our platform to be more decentralized as the development tools and blockchain network improve and scale.',
    },
    {
      question: 'Who is behind BitBrackets?',
      answer:
        'We are a small development team called CoralBytes Studios with collaboration with the excellent developers at the spanish blockchain blog NacionCripto. Most of us have a day job in other development projects, but we felt strongly about the BitBrackets idea and concept and wanted to make it happen. We do this as a hobby in our spare time with our own investment and no other external funds. Our goal is to try to get a working platform to the players and help bring awareness to the people outside the cryptocurrency community about the potential of the blockchain technology.',
    },

    {
      question: 'Did we missed something?',
      answer:
        'If you feel that we left out any information or some question that we did not answered feel free to reach us at our email: info@bitbrackets.io or join our telegram group with the link on our landing page.',
    },
    {
      title: '¡Enjoy BitBrackets!',
    },
  ],
  es: [
    {
      title: 'Iniciando',
      question: 'Que es Bitbrackets.io?',
      answer:
        'BitBrackets es una plataforma de contrato inteligente para crear predicciones de apuestas para eventos de deportes usando moneda digital (crypto monedas). Puedes crear tus propias apuestas e invitar a tus amigos y familiares para predecir la puntuación (resultado) para los próximos eventos deportivos. El jugador o jugadores que adivinen la mayoría de los resultados ganan el pozo de premios completamente asegurado por los Contratos Inteligentes.   ',
    },
    {
      question: '¿Qué necesito para crear mi pozo de premios y empezar a jugar con mis amigos?',
      answerbullet: [
        {
          bulletfirst:
            'Una computadora de escritorio o una computadora portátil en la que pueda ejecutar los navegadores de Chrome o Firefox.',
          bulletsecond:
            'MetaMask, que es un software que te permite interactuar con apps que utilizan moneda digital (crypto monedas).',
          bulletthird:
            'Ether, que es una tipo de pago que se utiliza como moneda en BitBrackets para crear pozos de premios y jugar mandando predicciones a cualquier pozo de premios.',
        },
      ],
    },
    {
      question: '¿Cómo instalar Metamask para jugar con moneda digital?',
      answer:
        'MetaMask  es como una billetera digital que tiene tu moneda digital en la que puedes usarla para jugar en Bitbrackets en diferentes pozos de premios. Necesitas poner Ether (la moneda digital aprobada por Bitbrackets) en la MetaMask en la misma forma que pones dinero real en tu billetera real para poder jugar en los pozos de premios o crear uno nuevo.',
      answer1: 'Puedes descargarlo aquí. https://metamask.io/.',
      answer2:
        'Precaución: Con la moneda digital tú eres responsable de ser tu propio banco. Toma precauciones en no revelar tu contraseña y palabras semillas a nadie o podrías perder todos tus fondos.',
    },
    {
      question: '¿Cómo obtengo Ether (moneda digital) para jugar?',
      answer:
        'Necesitas comprar ETH de un intercambio y transferir el ETH de tu billetera de intercambio a tu billetera de Metamask. Si necesitas recomendaciones sobre qué intercambio utilizar, puedes visitar:  https://blockgeeks.com/guides/best-cryptocurrency-exchanges/ ',
      answer1:
        'No puedes utilizar USD con pozos de premios de Bitbrackets cualquier tipo de moneda tiene que convertirse en ETH antes.',
    },
    {
      title: '¿Cómo jugar?',
      question: '¿Qué es una predicción en el pozo de premios?',
      answer:
        'Una predicción en el pozo de premios es un torneo donde varios jugadores predicen el resultado de cada juego de un evento deportivo público próximo a realizarse como la Copa del mundo de futbol, NCAA, etc. Cada jugador se une al pozo de premios ingresando una cantidad definida de dinero usualmente determinada por todos los participantes. El jugador con la mayoría de predicciones acertadas es el que gana el pozo de premios.',
    },
    {
      question: '¿Cómo crear un pozo de premios?',
      answer:
        'Cualquiera tiene permitido crear un nuevo pozo de premios para los juegos definidos.Para nuestro Beta solo se podrá realizar para el Mundial de fútbol 2018. En el futuro   planeamos apoyar otros eventos deportivos.',
      answer1:
        'Cada evento deportivo tiene una tarifa definida en la que el jugador debe de pagar para poder crear un pozo de premios. La tarifa puede variar según el evento deportivo. El jugador crea un pozo de premios nuevo y este es llamado administrador del pozo de premios (o simplemente administrador) y este necesita definir la tarifa de inscripción que cada jugador necesitará para participar y enviar sus predicciones. Cada pozo de premios es un contrato inteligente separado en nuestra plataforma.',
    },
    {
      question:
        '¿Ok, Yo creé un pozo de premios, ahora como le digo a mis amigos para invitarlos a que se unan al pozo de premios?`',
      answer:
        'Una vez creado el pozo de premios la plataforma te otorgará una URL única que puedes compartir con tus amistades. Una vez que den click en la URL ellos serán re direccionados a la página específica de su grupo para que puedan comenzar a ingresar sus predicciones y participar.  ',
    },
    {
      question:
        '¿Tengo un enlace de invitación de mi amigo para unirme a un pozo de premios, como me uno y envió mis predicciones?',
      answer:
        'Una vez que hayas ingresado al enlace de invitación podrás acceder a la  página principal del pozo de premios en donde puedes comenzar a ingresar tus predicciones para cada partido y quién ganará cada partido.',
    },
    {
      question: '¿Cómo envío mis predicciones?',
      answer:
        'Las predicciones que ingresaste son guardadas así que puedes regresar y finalizar una vez que estén listas para publicarlas en tu plataforma (contrato inteligente), necesitarás confirmar tus predicciones y pagar la tarifa definida por el administrador del pozo de premios. Puedes revisar tus predicciones antes de publicarlas. ',
      answer1:
        'Nota: Asegúrate de confirmar sus predicciones porque no puedes cambiar tus predicciones una vez que se publiquen en nuestra plataforma. (Esa es la naturaleza de la cadena de bloques Ethereum (Ethereum Blockchain)). ',
    },
    {
      question: '¿Cómo gano un pozo de premios?',
      answer:
        'Una vez que empezó el evento, la plataforma empezará a publicar los resultados y jugadores para que puedan comparar sus predicciones contra el resultado. Cada partido correctamente predicho anotará un punto para cada jugador. Al final de cada evento (ej. El mundial de fútbol tiene 64 partidos) sí eres el jugador con mayor resultados a tu favor puedes reclamar el pozo de premios publicando tus resultado. Una vez el evento haya terminado y además el periodo de apuesta finalizara, si nadie más público su puntuación más alta antes de esto, entonces tú serás el ganador y puedes proceder a reclamar el dinero del pozo de premios. ',
    },
    {
      question: '¿Cuánto obtiene el ganador del pozo de premios?',
      answer:
        'El ganador obtiene el premio total acumulado menos la tarifa porcentual del administrador del pozo de premios y menos la tarifa porcentual de BitBrackets del premio del pozo de premios.',
    },
    {
      question:
        '¿Soy el administrador del pozo de premios y creé un pozo de premios, puedo participar?',
      answer:
        'No, la cuenta usada para crear el pozo de premios no tiene permitido mandar predicciones, solo puedes invitar amigos para que jueguen. Por esta razón decidimos otorgarle al administrador del pozo de premios una comisión porcentual del pozo de premios una vez que el pozo de premios allá terminado y que el ganador  haya reclamado el premio. ',
    },
    {
      question: '¿Puedo cambiar mis predicciones una vez publicadas?',
      answer: 'No, mira “Cómo envío mis predicciones”..',
    },
    {
      question: '¿Puedo mirar predicciones de otros jugadores?',
      answer:
        'Sí, todos están en la blockchain para que cualquiera pueda verlos. Las predicciones estarán disponibles para compararlas también a través de nuestro plataforma, para que puedas seguir más de cerca a lo largo de la copa mundial de fútbol que te mostrará los resultados. ',
    },
    {
      question:
        '¿Puede un jugador enviar predicciones una vez que el evento de la copa mundial de fútbol empiece?',
      answer: 'No, no sería justo para el resto de participantes.',
    },
    {
      question:
        '¿Puedo ganar un pozo de premios con un puntaje alto sin que la plataforma me muestre un resultado?',
      answer:
        'Si tienes el puntaje más alto al final del evento, no podrás reclamar el premio a menos que se publique tu puntaje. Nuestra plataforma se basa en la nueva tecnología de Contratos Inteligente que funciona de manera diferente a otras aplicaciones de juegos que quizás haya jugado. En esencia, la plataforma necesita verificar que realmente eres el que tiene el puntaje más alto y solo puede hacerlo si publicas tu puntuación más alta.  ',
    },
    {
      question:
        '¿Cómo me mantengo actualizado durante el evento para ver quién gana con el puntaje más alto?',
      answer:
        'Se te proporcionará un correo electrónico cuando participes en la plataforma y habilitaremos un servicio para actualizar a los jugadores en cada pozo de premios de cualquier cambio notable en los puntajes. Sí te convierte en el primer jugador con el puntaje más alto en algún punto, recibirás una notificación por correo electrónico. También te recomendamos que revises la plataforma regularmente para obtener actualizaciones en los puntajes también.',
    },
    {
      question:
        '¿Tengo que pagar algo si soy el puntaje más alto y quiero publicar para reclamar el premio?',
      answer:
        'Sí, publicar el puntaje más alto te cuesta en moneda digital (gas en blockchain) porque hace que la plataforma calcula tu puntaje y verifique que sean tus predicciones, de hecho que seas el jugador con el puntaje más alto. Publicar el puntaje más alto es algo que no esperamos que haga ningún otro jugador aparte de lo que el ganador debe hacer, dado que el puntaje más alto será el ganador, creemos que el costo de publicación debe estar justificado para el jugador ganador.',
    },

    {
      question: '¿Pueden varios jugadores ganar el pozo de premios, se permiten los empates?',
      answer:
        'Sí, hemos diseñado para esa posibilidad. Todos los ganadores se dividirán el pozo de premios de manera uniforme, pero aún necesitarán publicar sus puntajes para ser contados como ganadores y poder reclamar el premio.',
    },
    {
      question:
        '¿Cualquiera puede unirse a un pozo de premios, son restringidos solo a las personas que compartí mi enlace?',
      answer:
        'Para nuestra versión beta, los pozos de premios están abiertos para que cualquier persona se una, planeamos en el futuro restringir las agrupaciones por invitación para que el administrador solo pueda compartirlas con los jugadores a los que quiera permitir su participación.',
      answer1:
        'Durante la versión beta, los premios de pozos  no estarán disponibles para navegar en nuestra plataforma, lo que significa que el administrador es el único que tiene el enlace y puede elegir compartirlo solo con un grupo específico, lo que hace que el grupo sea realmente privado. Si el administrador decide compartir el pozo de premios en un sitio público de redes sociales no podemos restringir el acceso de nadie al grupo y participar en este punto.',
    },
    {
      question: '¿Cuál es el período de gracia?',
      answer:
        'El período de gracia es un marco de tiempo configurado después de que el evento (por ejemplo, la Copa del Mundo) haya finalizado para que los jugadores publiquen sus puntajes y reclamen el premio. El contrato no se cerrará hasta que un jugador haya publicado una puntuación ganadora, que también es la puntuación más alta que el contrato ha verificado hasta el momento. Si se publicó tu puntaje durante el concurso o después de que finaliza, cuando expira el tiempo del período de gracia, podrás reclamar el premio, a menos que alguien más publique un puntaje más alto.',
    },
    {
      question:
        '¿Qué sucede si obtuve el puntaje más alto pero no lo publiqué y el período de gracia ya expiró?',
      answer:
        'Lo sentimos, pierdes tu reclamo del trono... perdón premio. Como se explicó anteriormente, nuestra plataforma necesita que los jugadores publiquen su puntaje para validar quién es el ganador. En lo que respecta a la plataforma, el ganador es el jugador con el puntaje más alto publicado en el momento de la expiración del período de gracia.',
    },
    {
      question: '¿Puedo crear varios pozos de premios?',
      answer:
        'Sí, puedes crear tantos pozos de premios como quieras. Es posible que desee crear un pozo de premios con tus compañeros de oficina y un pozo de premios familiar y simplemente compartir cada uno con cada grupo por separado.',
    },
    {
      title: 'Otros',
      question: '¿Cuándo estará lista la plataforma?',
      answer:
        'Hacemos nuestro mejor esfuerzo para que sea un mes antes de que inicie la Copa Mundial de Futbol para enviar nuestra versión beta. Nos gustaría lanzar nuestra versión beta en la red de prueba antes de lanzar en la red principal.',
    },
    {
      question: '¿Qué pasa si no se lanza antes de que comience la Copa del Mundo?',
      answer:
        'Estaremos realmente decepcionados si no podemos lanzar para la Copa del Mundo, pero realmente estamos haciendo este proyecto en nuestro tiempo libre y queremos ofrecer algo grandioso y una experiencia de usuario funcional a nuestros participantes. Si no podemos llegar a la fecha de la Copa Mundial de fútbol, avanzaremos con la habilitación de la plataforma para futuros eventos deportivos como las eventos semanales de la NFL, baloncesto de la NCAA,  de tenis, la liga de campeones, etc.',
    },
    {
      question: '¿Cómo hace BitBrackets para ganar dinero con los pozos de premios?',
      answer:
        'Cobramos una pequeña tarifa plana por cada grupo creado y obtenemos una tarifa porcentual de cada grupo también. La tarifa porcentual puede variar por evento, pero la mayor parte del tiempo será del 10% del premio acumulado.',
      answer1:
        'Las tarifas se usarán para respaldar el desarrollo de nuevas funcionalidades y mejoras de la plataforma.',
    },
    {
      question: '¿Por qué construiste BitBrackets?',
      answer:
        'Somos un equipo de desarrolladores autofinanciado que quería construir una aplicación de trabajo real para concienciar al espacio blockchain aprovechando la Copa del Mundo, que es un gran evento mediático. Dicho esto, también tenemos que costear servidores, implementar en el blockchain que cuesta dinero y también pagar los otros costos de desarrollo relacionados mientras lo hacemos.',
    },
    {
      question: '¿Cuándo es el ICO? ¿Dónde está tu token? ¿Cómo puedo comprar los tokens?',
      answer:
        'Lo sentimos, no hay ICO, no token, solo código de trabajo. Nuestro objetivo es ofrecer una plataforma de trabajo y mejorarla y hacerlo más descentralizado a medida que avanza la tecnología en el espacio y nos permite mejorarla para nuestros jugadores.',
    },
    {
      question: '¿Cómo resolvió el problema de Oracle?',
      answer:
        'En la terminología de desarrollo de Blockchain, el problema de Oracle es ¿cómo permitimos que la plataforma de Contratos Inteligentes interactúe con fuentes de datos externas, en este caso un feed de los resultados reales y las puntuaciones para validarlas frente a las predicciones de los jugadores en una solución descentralizada sin confianza?La respuesta corta es que no necesitamos resolverlo en este punto. Decidimos hacer centralizado el componente para publicar los resultados en la primera iteración. Lo que significa que publicaremos los resultados de cada partido para que todos los demás también lo verifiquen. Dejamos el diseño abierto para incorporar cualquier solución al problema oracle que consideremos apropiado en el futuro, ya sea Oracle o un mercado de predicciones descentralizado que podemos conectar con nuestros contratos.',
    },
    {
      question: '¿Es esto una estafa, es legal?',
      answer:
        'No es una estafa, los Contratos Inteligentes están abiertos al público para auditar, si conoce Solidity puede verificarlos aquí. No podemos retirar dinero del fondo de premios aparte de la tarifa. El gerente tampoco puede retirarse del premio acumulado más allá de su tarifa designada. Nadie puede manipular las predicciones una vez que se publiquen para que pueda sentirse seguro de que no será excluido de su pozo de premios si es el ganador. La legalidad de jugar en grupos de predicción con criptomonedas debe ser evaluada por cada jugador bajo su propio riesgo, verifique sus leyes locales antes de participar en cualquier grupo.',
    },
    {
      question:
        ' Escuché que los Contratos inteligentes pueden ser pirateados, ¿cómo se asegura de que no perdamos todo nuestro dinero?',
      answer:
        'Sí, en el pasado se han producido muchos hackeos conocidos en varios Contratos Inteligentes famosos. Con esto en mente, hemos diseñado la plataforma BitBrackets desde el principio con algunas medidas preventivas para anticipar lo mejor posible cualquier posible riesgo de seguridad.',
      answerbullet: [
        {
          bulletfirst:
            'Los pozos de premios tienen un tope máximo permitido que definimos. Lo que significa que ningún grupo debe tener un gran equilibrio para atraer a posibles hackers. Los pozos de premios deben jugarse por pequeñas cantidades de dinero en nuestro primer MVP. Una vez que la plataforma madure, podemos permitir balances más grandes.',
          bulletsecond:
            'Los principales contratos en nuestra plataforma tienen un bloqueo de seguridad o un tipo de botón de pánico de características en caso de emergencia que podemos utilizar para restringir el acceso a los contratos si se detecta un ataque en cualquiera de nuestros grupos.',
          bulletthird:
            'Nuestro diseño hace que los principales contratos principales de nuestra plataforma sean actualizables, lo que significa que si encontramos un gran riesgo de seguridad, procederemos a bloquear el acceso a nuestros contratos y actualizarlos para solucionar el problema de seguridad. Las actualizaciones de nuestros contratos están diseñadas para mantener intactos los saldos y las predicciones de los jugadores.',
        },
      ],
    },
    {
      question:
        ' ¿Por qué esta parte X o esta otra parte Y no está descentralizada, ¿no se supone que esto es un nuevo App para la revolución descentralizada de la cadena de bloques?',
      answer:
        'Creemos que la plataforma blockchain y Contratos Inteligentes será el futuro, pero también queríamos traer una aplicación funcional para los fanáticos que quieran compartir el conocimiento de las criptomonedas con amigos y familiares. Debido a los tiempos de la Copa del Mundo y el estado actual del desarrollo de la cadena de bloques, necesitábamos comprometernos en algunas decisiones de diseño que pueden no estar totalmente descentralizadas en este momento. (Resultados, problema de oracle, datos de almacenamiento en caché)Independientemente de eso, creemos que una App que funcione no debería ser diferente para el usuario final que una aplicación normal, y actualmente el estado de las plataformas de blockchain simplemente no están ahí para brindar una gran experiencia de usuario al usuario final. Dicho esto, creemos que la discusión centralizada versus la descentralizada no debe ser binaria y anticipamos en nuestro diseño actualizar nuestra plataforma para que esté más descentralizada a medida que las herramientas de desarrollo y la red blockchain mejoran y se amplían.',
    },
    {
      question: '¿Quién está detrás de BitBrackets?',
      answer:
        'Somos un pequeño equipo de desarrollo llamado CoralBytes Studios con la colaboración de excelentes desarrolladores en el blog español de blockchain NacionCripto. La mayoría de nosotros tenemos un trabajo diario en otros proyectos de desarrollo, pero estábamos convencidos de la idea y el concepto de BitBrackets y queríamos que sucediera. Hacemos esto como un hobby en nuestro tiempo libre con nuestra propia inversión y sin otros fondos externos. Nuestro objetivo es tratar de conseguir una plataforma de trabajo para los jugadores y ayudar a concienciar a las personas ajenas a la comunidad de criptomonedas sobre el potencial de la tecnología blockchain.',
    },

    {
      question: '¿ Se Nos olvidado algo?',
      answer:
        'Si considera que hemos omitido alguna información o alguna pregunta que no hayamos respondido, no dude en ponerse en contacto con nosotros en nuestro correo electrónico: info@bitbrackets.io o únase a nuestro grupo de telegram con el enlace en nuestra página de destino.',
    },
    {
      title: ' ¡Disfruta BitBrackets!',
    },
  ],
};
