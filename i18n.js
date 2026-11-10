/* =====================================================================
   IDIOMA ES / EN
   ---------------------------------------------------------------------
   La web está escrita en español. Este archivo traduce al inglés lo que
   se ve en pantalla usando el diccionario de abajo (español -> inglés).
   Funciona también con el contenido que se pinta después (tarjetas,
   avisos, modales...), así que no hace falta tocar el resto del código.

   - Para añadir o corregir una traducción: edita DICT.
   - "{}" es un hueco variable (números, nombres...).
       'Temporada {}': 'Season {}'
   - No se traduce nada dentro de [data-i18n-skip] (ej. el panel admin).
   - Las fechas usan uiLocale() (es-ES o en-GB).
   ===================================================================== */
(function(){
'use strict';

const DICT={
/* ---------- Carga, menú y cabecera ---------- */
'Bienvenido':'Welcome',
'Espere un momento mientras cargamos la web.':'Please wait while the site loads.',
'Virtual Rally Championship · Inicio':'Virtual Rally Championship · Home',
'Menú principal':'Main menu',
'Inicio':'Home',
'Noticias':'News',
'Pruebas':'Rallies',
'Campeonatos':'Championships',
'Clasificaciones':'Standings',
'Comunidad':'Community',
'Equipos':'Teams',
'Galería y solicitudes':'Gallery and requests',
'Ranking SR':'SR Ranking',
'Licencias y Safety Rating':'Licences and Safety Rating',
'Licencias':'Licences',
'Pide la tuya al momento':'Get yours instantly',
'Tiempos en directo':'Live timing',
'Panel de administración':'Admin panel',
'Cambiar entre modo claro y oscuro':'Switch between light and dark mode',
'Modo claro / oscuro':'Light / dark mode',
'Entrar':'Sign in',
'Iniciar sesión':'Sign in',
'Pilotos y administración':'Drivers and admins',
'Crear cuenta':'Create account',
'Regístrate como piloto':'Sign up as a driver',
'Mi perfil':'My profile',
'Datos, equipo e inscripciones':'Details, team and entries',
'Mi Safety Rating':'My Safety Rating',
'Tu licencia y progreso':'Your licence and progress',
'Panel admin':'Admin panel',
'Gestión de la web':'Site management',
'Cerrar sesión':'Sign out',
'Abrir menú':'Open menu',
'Mi cuenta':'My account',
'Cerrar':'Close',

/* ---------- Portada ---------- */
'El campeonato definitivo para competir, inscribirte en pruebas, seguir eventos y formar parte de equipos de la comunidad.':'The ultimate championship to compete, enter rallies, follow events and join community teams.',
'Ver pruebas':'View rallies',
'Únete a un equipo':'Join a team',
'Pilotos':'Drivers',
'Pruebas próximas':'Upcoming rallies',
'Pruebas disputadas':'Rallies held',
'Actualidad':'Latest',
'Última noticia':'Latest news',
'Ver todas':'View all',
'Resultados':'Results',
'Últimas pruebas finalizadas':'Latest finished rallies',
'Envía tu solicitud al team manager o crea tu propio equipo desde la web.':'Send a request to the team manager or create your own team on the site.',
'Tu Safety Rating':'Your Safety Rating',
'Sube de licencia (R, D, C, B, A, Pro) corriendo limpio, como en iRacing.':'Climb the licence ladder (R, D, C, B, A, Pro) by driving clean, just like iRacing.',
'Ranking de licencias':'Licence ranking',
'Descubre quién tiene la mejor licencia de la comunidad.':'Find out who holds the best licence in the community.',
'En curso ahora':'Live now',
'Próxima carrera':'Next race',
'Sesión':'Session',
'¡A correr!':'Race on!',
'días':'days',

/* ---------- Noticias ---------- */
'Organización':'Organisation',
'Comunicados, novedades de campeonato y toda la actualidad de Virtual Rally Championship.':'Announcements, championship updates and all the latest from Virtual Rally Championship.',
'Leer más →':'Read more →',
'← Todas las noticias':'← All news',
'📰 Noticias':'📰 News',
'Cargando noticias...':'Loading news...',
'Las noticias todavía no están activadas (falta crear la tabla en Supabase).':'News is not enabled yet.',
'Todavía no hay noticias publicadas. ¡Vuelve pronto!':'No news published yet. Check back soon!',
'Comunicado':'Announcement',

/* ---------- Safety Rating / ranking ---------- */
'Área de piloto':'Driver area',
'Safety Rating y licencia':'Safety Rating and licence',
'Tu progreso al estilo iRacing: cada prueba limpia suma, los abandonos y las sanciones restan. Sube de clase hasta llegar a Pro.':'Your progress, iRacing style: every clean rally adds up, retirements and penalties take away. Climb the classes all the way to Pro.',
'Comunidad VRC':'VRC Community',
'Los pilotos con mejor licencia y Safety Rating de la comunidad. Pulsa sobre un piloto para ver su historial.':'The drivers with the best licence and Safety Rating in the community. Click a driver to see their history.',
'Calculando licencia…':'Calculating licence…',
'Calculando tu licencia...':'Calculating your licence...',
'No se pudo calcular la licencia:':'Could not calculate the licence:',
'Calculando el ranking...':'Calculating the ranking...',
'No se pudo cargar el ranking:':'Could not load the ranking:',
'Inicia sesión para ver tu Safety Rating y tu licencia.':'Sign in to see your Safety Rating and licence.',
'Inicia sesión para ver el ranking de licencias de la comunidad.':'Sign in to see the community licence ranking.',
'No se pudieron leer los perfiles de los pilotos. Avisa a administración.':'Could not read the driver profiles. Please tell the organisers.',
'Ranking':'Ranking',
'para ascender a':'to be promoted to',
'(unas':'(about',
'prueba limpia':'clean rally',
'pruebas limpias':'clean rallies',
'Te faltan':'You need',
'Has llegado a la cima: eres piloto':'You have reached the top: you are a',
'. Mantén tu Safety Rating limpio para conservarlo.':' driver. Keep your Safety Rating clean to stay there.',
'⚠ Estás cerca del descenso: por debajo de {} SR bajarías a {}.':'⚠ You are close to demotion: below {} SR you would drop to {}.',
'Prueba terminada':'Rally finished',
'Abandono (AB)':'Retired (DNF)',
'Inscrito y no presentado (NP)':'Entered but did not start (DNS)',
'Sanción o ajuste de la organización':'Penalty or adjustment by the organisers',
'según el caso':'case by case',
'Ascenso de clase':'Class promotion',
'al llegar a {} SR · reinicio en {}':'on reaching {} SR · reset to {}',
'Descenso de clase':'Class demotion',
'por debajo de {} SR · reinicio en {}':'below {} SR · reset to {}',
'Punto de partida':'Starting point',
'Rookie · {} SR':'Rookie · {} SR',
'Todavía no hay pruebas puntuables. Cuando termines tu primera prueba aparecerá aquí.':'No scoring rallies yet. Your first finished rally will appear here.',
'Ajuste':'Adjustment',
'Terminada':'Finished',
'Terminadas':'Finished',
'Abandono':'Retired',
'No presentado':'Did not start',
'⬆ Ascenso a {}':'⬆ Promoted to {}',
'⬇ Descenso a {}':'⬇ Demoted to {}',
'Licencia VRC':'VRC licence',
'Pruebas terminadas':'Rallies finished',
'Abandonos':'Retirements',
'No presentados':'Did not start',
'Ascensos':'Promotions',
'📈 Detalle de tu progreso':'📈 Your progress in detail',
'Más reciente primero':'Most recent first',
'Fecha':'Date',
'Prueba':'Rally',
'Resultado':'Result',
'Licencia':'Licence',
'📘 Cómo funciona':'📘 How it works',
'Tu Safety Rating (0.00–4.99) sube cuando terminas pruebas sin problemas y baja si abandonas, no te presentas o recibes sanciones. Al llegar a {} subes de clase.':'Your Safety Rating (0.00–4.99) goes up when you finish rallies cleanly and goes down if you retire, do not start or get penalties. On reaching {} you move up a class.',
'No hay pilotos que coincidan.':'No matching drivers.',
'🏆 Ranking de licencias':'🏆 Licence ranking',
'Ordenado por clase y Safety Rating':'Sorted by class and Safety Rating',
'Buscar piloto o equipo…':'Search driver or team…',
'Tu puesto:':'Your position:',
'Aún no hay pilotos con pruebas puntuables. El ranking aparecerá cuando se carguen los primeros resultados.':'No drivers with scoring rallies yet. The ranking will appear once the first results are uploaded.',
'Clase D':'Class D','Clase C':'Class C','Clase B':'Class B','Clase A':'Class A',
'Evento':'Event',
'Prueba anterior':'Previous rally',
'Ajuste de administración':'Admin adjustment',
'Piloto eliminado':'Deleted driver',
'Sin nombre':'No name',
'Sin motivo':'No reason',

/* ---------- Pruebas / eventos ---------- */
'Calendario Oficial de Pruebas VRC':'Official VRC Rally Calendar',
'Accede a cada evento para poder acceder al tablón de anuncios, archivos descargables, inscripciones y sesiones.':'Open each event to access the notice board, downloadable files, entries and sessions.',
'Ver eventos':'View events',
'Abrir live timing':'Open live timing',
'🏆 Eventos próximos':'🏆 Upcoming events',
'🏁 Pruebas finalizadas':'🏁 Finished rallies',
'Resultados por temporada':'Results by season',
'No hay eventos próximos':'No upcoming events',
'Cuando haya pruebas vigentes aparecerán aquí automáticamente.':'Active rallies will appear here automatically.',
'Inscritos':'Entries',
'Kilometraje total':'Total distance',
'Kilometraje total total':'Total distance',
'Estado':'Status',
'Ver más detalles':'View details',
'Los archivos estarán disponibles cuando te inscribas en una sesión de la prueba':'Files will be available once you enter a session of the rally',
'Tu inscripción está pendiente de aprobación. Los archivos estarán disponibles cuando la administración acepte tu inscripción.':'Your entry is pending approval. Files will be available once the organisers accept your entry.',
'Estás inscrito en esta sesión, pero todavía no hay archivos publicados para ella.':'You are entered in this session, but no files have been published for it yet.',
'📄 Documentos oficiales':'📄 Official documents',
'Tablón de anuncios oficial de la prueba.':'Official notice board of the rally.',
'Abrir tablón de anuncios':'Open notice board',
'🚦 Sesiones':'🚦 Sessions',
'Los horarios de las sesiones están adaptados a la zona horaria local de cada participante.':'Session times are shown in each participant\'s local time zone.',
'Fecha y hora':'Date and time',
'Plazas':'Slots',
'Inscripción':'Entry',
'📦 Archivos de la prueba':'📦 Rally files',
'Información de la prueba':'Rally information',
'Comienzo periodo de inscripciones':'Entries open',
'Fin periodo de inscripciones':'Entries close',
'Pilotos inscritos provisionales':'Provisional entry list',
'Volver a eventos':'Back to events',
'No hay coches para esta categoría':'No cars for this category',
'Tu sesión actual':'Your current session',
'Selecciona una opción':'Select an option',
'Disponible en {}d {}h':'Available in {}d {}h',
'Disponible en {}h {}m':'Available in {}h {}m',
'Disponible en {}m {}s':'Available in {}m {}s',
'Disponible en {}s':'Available in {}s',
'Descargar':'Download',
'Prueba VRC':'VRC rally',
'Sin campeonato':'No championship',
'Placa {}':'Plate {}',
'Tu sesión':'Your session',
'Próximamente':'Coming soon',
'Archivo':'File',
'Archivo de la sesión.':'Session file.',
'🎨 Subir skins':'🎨 Upload skins',
'Sube la skin de tu coche a la carpeta de Drive de la prueba.':'Upload your car skin to the rally\'s Drive folder.',
'Inscrito':'Entered',
'No inscrito':'Not entered',
'Licencia mínima':'Minimum licence',
'Cartel de la prueba':'Rally poster',
'Cartel {}':'Poster {}',
'pendiente de publicar':'not published yet',
'Ya estás inscrito.':'You are already entered.',
'Sesión: {}':'Session: {}',
'Categoría: {}':'Category: {}',
'Coche: {}':'Car: {}',
'Código Tablón:':'Notice board code:',
'Cambiar sesión {}/1':'Change session {}/1',
'Cambiar coche/categoría {}/1':'Change car/category {}/1',
'Cambiar sesión ·':'Change session ·',
'Cambiar coche y categoría ·':'Change car and category ·',
'Cambiar sesión · {}':'Change session · {}',
'Cambiar coche y categoría · {}':'Change car and category · {}',
'Inscripciones cerradas':'Entries closed',
'Inscripciones no abiertas':'Entries not open yet',
'Inscribirse':'Enter',
'· Cerrada':'· Closed',
'Cerrada':'Closed',
'Las inscripciones de esta prueba ya estan cerradas.':'Entries for this rally are closed.',
'Las inscripciones de esta prueba todavia no estan abiertas.':'Entries for this rally are not open yet.',
'Licencia insuficiente':'Licence too low',
'No se pudo comprobar tu Safety Rating. Inténtalo de nuevo en un momento.':'Could not check your Safety Rating. Please try again in a moment.',
'No tienes el mínimo para correr esta prueba: se pide {} o superior y tu licencia es {} · SR {}.':'You do not meet the minimum for this rally: {} or higher is required and your licence is {} · SR {}.',
'Cualquier licencia':'Any licence',
'Próxima':'Next',
'Cargando pruebas finalizadas...':'Loading finished rallies...',
'Temporada {}':'Season {}',
'Todavía no hay pruebas finalizadas':'No finished rallies yet',
'Cuando termine una prueba aparecerá aquí con sus resultados.':'Once a rally finishes it will appear here with its results.',
'Participantes':'Participants',
'Clasificados':'Classified',
'Ver resultados':'View results',
'Disputada el {}':'Held on {}',
'Resultados pendientes de publicar.':'Results not published yet.',
'Resultados pendientes':'Results pending',
'Ficha de la prueba':'Rally details',
'{} participantes':'{} participants',
'Pos. cat.':'Cat. pos.',
'Pos. general':'Overall pos.',
'Pos. categoría':'Category pos.',
'General':'Overall',

/* ---------- Inscripción ---------- */
'Inscripción a prueba':'Rally entry',
'Recuerda que una vez realizada la inscripción, solo podrás cambiar 1 vez de sesión y de coche':'Remember: once entered, you can only change session and car once',
'Copiloto':'Co-driver',
'Nacionalidad copiloto':'Co-driver nationality',
'Comunidad autónoma copiloto':'Co-driver region (Spain)',
'Otra nacionalidad copiloto':'Co-driver other nationality',
'Categoría':'Category',
'Coche':'Car',
'Volver al evento':'Back to event',
'Confirmar inscripción':'Confirm entry',
'Sin categoría':'No category',

/* ---------- Campeonatos y clasificaciones ---------- */
'Todos los campeonatos de la comunidad con el calendario de cada prueba. Pulsa en un campeonato para ver su calendario.':'All community championships with each rally\'s calendar. Click a championship to see its calendar.',
'Cargando campeonatos...':'Loading championships...',
'Todavía no hay campeonatos publicados.':'No championships published yet.',
'Todas':'All',
'← Todos los campeonatos':'← All championships',
'pruebas':'rallies',
'disputadas':'held',
'por disputar':'to go',
'📅 Calendario':'📅 Calendar',
'Horario de tu zona horaria':'Times in your time zone',
'Fecha por confirmar':'Date to be confirmed',
'Finalizada':'Finished',
'En curso':'In progress',
'Temporada finalizada':'Season finished',
'Calendario por publicar':'Calendar not published yet',
'Ver calendario →':'View calendar →',
'Por fijar':'TBC',
'Ver clasificación':'View standings',
'El calendario de este campeonato todavía no está publicado.':'This championship\'s calendar has not been published yet.',
'Calendario {}':'Calendar {}',
'Cargando clasificaciones...':'Loading standings...',
'Este campeonato todavía no tiene pruebas.':'This championship has no rallies yet.',
'Este campeonato todav???a no tiene pruebas.':'This championship has no rallies yet.',
'Este campeonato todavï¿½a no tiene pruebas.':'This championship has no rallies yet.',
'Todav???a no hay puntos de equipos.':'No team points yet.',
'Todavï¿½a no hay resultados para esta clasificaciï¿½n.':'No results for this standings table yet.',
'No hay campeonatos con clasificaciones visibles en la web.':'No championships with public standings.',
'Nº':'No.',
'Equipo':'Team',
'Total puntos':'Total points',
'Piloto':'Driver',
'Campeonato':'Championship',
'POS.':'POS.',
'PTOS':'PTS',
'Clasificación general':'Overall standings',
'Clasificación categoría':'Category standings',
'Clasificación Desafío Peugeot':'Desafío Peugeot standings',

/* ---------- Login / registro ---------- */
'Acceso pilotos y admin':'Driver and admin access',
'Login':'Login',
'Entra con tu correo y contraseña.':'Sign in with your email and password.',
'Contraseña':'Password',
'Tu contraseña':'Your password',
'Crear cuenta piloto':'Create driver account',
'Restablecer contraseña':'Reset password',
'Nuevo piloto':'New driver',
'Registro':'Sign up',
'Cuando tengas la cuenta podrás pedir tu licencia de piloto en':'Once you have an account you can request your driver licence in',
'(se asigna al momento) y solicitar entrar en un equipo o crear el tuyo.':'(issued instantly) and ask to join a team or create your own.',
'Nombre':'First name',
'Apellido':'Last name',
'17 dígitos':'17 digits',
'Nacionalidad':'Nationality',
'Comunidad autónoma':'Region (Spain)',
'Otra nacionalidad':'Other nationality',
'Escribe la nacionalidad':'Type the nationality',
'Cancelar':'Cancel',
'Registrarme':'Sign up',
'Selecciona comunidad autónoma':'Select region',
'Selecciona nacionalidad':'Select nationality',
'Otro':'Other',

/* ---------- Perfil ---------- */
'🏁 Mis inscripciones':'🏁 My entries',
'Pruebas a las que estás inscrito y carreras que has corrido':'Rallies you have entered and races you have driven',
'👥 Mi equipo':'👥 My team',
'El team manager decide si te acepta':'The team manager decides whether to accept you',
'Equipos de la comunidad':'Community teams',
'Sin equipo':'No team',
'Salir del equipo':'Leave team',
'Crear mi equipo':'Create my team',
'Enviar solicitud':'Send request',
'Tu solicitud le llega al team manager del equipo, que decide si te acepta. Cuando te acepte, el equipo y su licencia se añaden solos a tu perfil.':'Your request goes to the team manager, who decides whether to accept you. Once accepted, the team and its licence are added to your profile automatically.',
'Datos personales':'Personal details',
'Mis datos':'My details',
'Foto de perfil':'Profile photo',
'Licencia de piloto':'Driver licence',
'Pídela en la sección Licencias':'Request it in the Licences section',
'Licencia de equipo':'Team licence',
'Guardar cambios':'Save changes',
'Mis inscripciones:':'My entries:',
'Aprobada':'Approved',
'Pendiente de aprobación':'Pending approval',
'No estás inscrito en ninguna prueba próxima.':'You are not entered in any upcoming rally.',
'Ver el calendario':'View the calendar',
'{} terminadas':'{} finished',
'Todavía no has corrido ninguna prueba en la comunidad.':'You have not driven any community rally yet.',
'Cargando tus pruebas...':'Loading your rallies...',
'Ver prueba':'View rally',
'Próximas pruebas {}':'Upcoming rallies {}',
'Carreras disputadas {}{}':'Races driven {}{}',
'Historial':'History',
'Pedir licencia':'Request licence',
'Obtener licencia de equipo':'Get team licence',
'· Licencia {}':'· Licence {}',
'Licencia {}':'Licence {}',
'{} · Safety Rating':'{} · Safety Rating',
'Equipo escrito a mano: no está en la lista oficial.':'Team typed by hand: it is not on the official list.',
'Elige uno de la lista y envía tu solicitud, o crea tu propio equipo.':'Pick one from the list and send your request, or create your own team.',
'Ahora estás en':'You are currently in',
'El team manager decidirá si te acepta.':'The team manager will decide whether to accept you.',
'Ahora estás en "{}". Si te aceptan, te cambiarás a "{}".':'You are currently in "{}". If accepted, you will move to "{}".',

/* ---------- Equipos ---------- */
'Galería oficial de equipos de la comunidad. Pulsa en cualquier equipo para ver sede, dirección, redes y pilotos.':'Official gallery of community teams. Click any team to see its base, management, social media and drivers.',
'👥 Equipos de la comunidad':'👥 Community teams',
'Logo equipo':'Team logo',
'Redes Sociales':'Social media',
'Dirección':'Management',
'Miembros / Pilotos':'Members / Drivers',
'Historial del piloto':'Driver history',
'Pruebas disputadas en la comunidad':'Rallies driven in the community',
'¿Quieres correr en este equipo?':'Want to race for this team?',
'Inicia sesión para solicitarlo':'Sign in to request it',
'⭐ Eres el team manager{}':'⭐ You are the team manager{}',
'⭐ Eres el team manager de {}':'⭐ You are the team manager of {}',
'Gestionar equipo':'Manage team',
'✔ Perteneces a este equipo':'✔ You belong to this team',
'⏳ Solicitud enviada el {}. Esperando respuesta del team manager.':'⏳ Request sent on {}. Waiting for the team manager\'s reply.',
'Cancelar solicitud':'Cancel request',
'Solicitar unirme':'Request to join',
'Mis solicitudes':'My requests',
'solicitud pendiente':'pending request',
'solicitudes pendientes':'pending requests',
'No hay solicitudes pendientes para tu equipo.':'No pending requests for your team.',
'⏳ Pendiente':'⏳ Pending',
'✔ Aceptada':'✔ Accepted',
'✖ Rechazada':'✖ Rejected',
'Cancelada':'Cancelled',
'Rechazar':'Reject',
'Aceptar':'Accept',
'este piloto':'this driver',
'Sin perfiles sociales disponibles por el momento':'No social profiles available yet',
'SEDE':'BASE',
'CREACIÓN':'FOUNDED',
'PALMARÉS':'ACHIEVEMENTS',
'Cargando historial...':'Loading history...',
'No se pudo cargar el historial:':'Could not load the history:',
'Todavía no tiene pruebas terminadas en la comunidad.':'No finished community rallies yet.',
'Sin sede indicada':'No base given',
'Foto {}':'Photo {}',
'Web':'Website',

/* ---------- Licencias ---------- */
'Licencias oficiales':'Official licences',
'Licencias VRC':'VRC licences',
'Pide tu licencia de piloto o la de tu equipo: se asigna al momento, se añade a tu perfil y te la enviamos por email.':'Request your driver or team licence: it is issued instantly, added to your profile and emailed to you.',
'Tu licencia de piloto':'Your driver licence',
'Crea tu cuenta o inicia sesión y obtén tu licencia al momento.':'Create an account or sign in and get your licence instantly.',
'La licencia de equipo se asigna al crear tu equipo desde la web. Inicia sesión para empezar.':'The team licence is issued when you create your team on the site. Sign in to get started.',
'Ya está en tu perfil. Si hay algún error, contacta con administración.':'It is already on your profile. If something is wrong, contact the organisers.',
'Obtener licencia de piloto':'Get driver licence',
'Se asigna al momento, se añade a tu perfil y te la enviamos por email.':'Issued instantly, added to your profile and emailed to you.',
'Email (te la enviamos aquí)':'Email (we send it here)',
'¿Tu nombre no está bien escrito? Corrígelo antes en':'Is your name spelt wrong? Fix it first in',
': la licencia se guarda con él.':': the licence is saved with it.',
'Obtener mi licencia':'Get my licence',
'La licencia de equipo la gestiona el team manager de tu equipo. ¿Prefieres montar el tuyo?':'Your team licence is managed by your team manager. Would you rather start your own team?',
'Crea tu equipo':'Create your team',
'Al crear tu equipo desde la web quedas como team manager y recibes la licencia de equipo al momento, también por email.':'When you create your team on the site you become team manager and receive the team licence instantly, also by email.',
'Crear equipo':'Create team',
'Inicia sesión para crear tu equipo. Quedarás como team manager y recibirás la licencia de equipo al momento.':'Sign in to create your team. You will be the team manager and receive the team licence instantly.',
'Ya eres el team manager de':'You are already the team manager of',
'. Solo se puede dirigir un equipo.':'. You can only manage one team.',
'Ver mi equipo':'View my team',
'Se asigna automáticamente':'Assigned automatically',
'usuario#0000 o @usuario':'user#0000 or @user',
'Asignando licencia...':'Assigning licence...',
'Ya tenías licencia':'You already had a licence',
'Licencia de equipo asignada':'Team licence assigned',
'Licencia de piloto asignada':'Driver licence assigned',
'Esta es tu licencia':'This is your licence',
'¡Licencia añadida automáticamente!':'Licence added automatically!',
'Se ha guardado en tu equipo y en tu perfil. Los pilotos que aceptes en el equipo la recibirán solos.':'It has been saved to your team and your profile. Drivers you accept into the team will receive it automatically.',
'Ya está guardada en tu perfil. La necesitarás para inscribirte en las pruebas.':'It is saved on your profile. You will need it to enter rallies.',
'tu email':'your email',
'✉ Enviando la licencia a':'✉ Sending the licence to',
'✔ Te la hemos enviado por email a':'✔ We have emailed it to',
'Email de licencia:':'Licence email:',
'Eres el team manager. Los pilotos que aceptes reciben esta licencia en su perfil.':'You are the team manager. Drivers you accept receive this licence on their profile.',
'Eres el team manager y tu equipo todavía no tiene licencia.':'You are the team manager and your team does not have a licence yet.',
'No hemos podido enviar el email ahora mismo. La licencia ya está en tu perfil y administración puede reenviártela.':'We could not send the email right now. The licence is already on your profile and the organisers can resend it.',
'Entendido':'Got it',

/* ---------- Crear equipo ---------- */
'Nuevo equipo':'New team',
'1. Datos del equipo':'1. Team details',
'Nombre del equipo *':'Team name *',
'Nombre del equipo':'Team name',
'Logo':'Logo',
'Sede':'Base',
'Fecha de creación':'Founded on',
'Temporada':'Season',
'2. Redes sociales':'2. Social media',
'Pega el enlace completo de cada red que tengáis. Las vacías no se muestran.':'Paste the full link for each network you have. Empty ones are not shown.',
'3. Director del equipo':'3. Team principal',
'Eres tú: tu cuenta queda asociada como team manager y decidirás quién entra en el equipo.':'It is you: your account becomes the team manager and you decide who joins the team.',
'Director':'Principal',
'Foto del director':'Principal\'s photo',
'Ciudad | Provincia | País':'City | Region | Country',
'. Al crear tu equipo saldrás de él.':'. Creating your team will make you leave it.',
'Creando equipo...':'Creating team...',
'Crear equipo «{}» + licencia de equipo':'Create team «{}» + team licence',
'Licencia de equipo para «{}»':'Team licence for «{}»',

/* ---------- Imágenes ---------- */
'Sin imagen':'No image',
'📷 Subir imagen':'📷 Upload image',
'PNG, JPG o WEBP · máximo 3 MB':'PNG, JPG or WEBP · max 3 MB',
'o pega una URL https://...':'or paste a https://... URL',
'La imagen debe ser PNG, JPG, WEBP o GIF.':'The image must be PNG, JPG, WEBP or GIF.',
'La imagen pesa más de 3 MB.':'The image is larger than 3 MB.',
'Inicia sesión para subir imágenes.':'Sign in to upload images.',
'La imagen debe ser una URL que empiece por https://':'The image must be a URL starting with https://',
'No se pudo subir la imagen:':'Could not upload the image:',

/* ---------- Avisos (toasts) y confirmaciones ---------- */
'Introduce tu nueva contraseña:':'Enter your new password:',
'Cambio de contraseña cancelado.':'Password change cancelled.',
'Contraseña actualizada correctamente.':'Password updated successfully.',
'Evento no encontrado o todavía no está cargado.':'Event not found or not loaded yet.',
'No tienes inscripción en esta prueba.':'You are not entered in this rally.',
'Ya no puedes cambiar de sesión o ya has usado el cambio disponible.':'You can no longer change session, or you have already used your change.',
'Ya no puedes cambiar coche/categoría o ya has usado el cambio disponible.':'You can no longer change car/category, or you have already used your change.',
'Debes iniciar sesión antes de inscribirte.':'You must sign in before entering.',
'Ya estás inscrito. Usa los botones de cambio disponibles en el resumen del evento.':'You are already entered. Use the change buttons in the event summary.',
'Evento no encontrado.':'Event not found.',
'Este evento todavía no tiene sesiones configuradas.':'This event has no sessions set up yet.',
'El campeonato de este evento todavía no tiene coches o categorías configuradas.':'This event\'s championship has no cars or categories set up yet.',
'No hay sesiones con plazas disponibles para esta prueba.':'No sessions with free slots for this rally.',
'Rellena nombre, apellido, email y contraseña.':'Fill in first name, last name, email and password.',
'El Steam ID debe tener exactamente 17 dígitos numéricos.':'The Steam ID must be exactly 17 digits.',
'El Steam ID debe tener exactamente 17 digitos numericos.':'The Steam ID must be exactly 17 digits.',
'El Steam ID debe tener 17 dígitos.':'The Steam ID must be 17 digits.',
'Selecciona o escribe la nacionalidad.':'Select or type the nationality.',
'Selecciona la comunidad autónoma.':'Select the region.',
'Selecciona la comunidad autonoma.':'Select the region.',
'Registro creado. Inicia sesión y pide tu licencia en Licencias.':'Account created. Sign in and request your licence in Licences.',
'Escribe email y contraseña.':'Enter email and password.',
'Escribe tu email para enviarte el enlace de restablecimiento.':'Enter your email so we can send you the reset link.',
'Te hemos enviado un enlace para restablecer la contraseña.':'We have sent you a link to reset your password.',
'Sesión cerrada.':'Signed out.',
'Debes iniciar sesion.':'You must sign in.',
'Debes iniciar sesión.':'You must sign in.',
'Sesion caducada.':'Session expired.',
'Nombre y apellido son obligatorios.':'First and last name are required.',
'Perfil actualizado.':'Profile updated.',
'Elige una sesión distinta.':'Choose a different session.',
'Esta sesion ya no tiene plazas disponibles.':'This session has no free slots left.',
'Sesión actualizada. Has usado tu único cambio de sesión.':'Session updated. You have used your only session change.',
'Elige una categoría o coche distinto.':'Choose a different category or car.',
'Coche/categoría actualizado. Has usado tu único cambio disponible.':'Car/category updated. You have used your only change.',
'Ya estás inscrito en esta prueba.':'You are already entered in this rally.',
'Tu perfil de piloto no existe en la base de datos. Contacta con administracion para repararlo.':'Your driver profile does not exist in the database. Contact the organisers to fix it.',
'Rellena copiloto y nacionalidad del copiloto.':'Fill in the co-driver and their nationality.',
'Selecciona la comunidad autónoma del copiloto.':'Select the co-driver\'s region.',
'Inscripción guardada. Ya puedes ver archivos de tu sesión.':'Entry saved. You can now see your session files.',
'Inicia sesión con tu cuenta admin.':'Sign in with your admin account.',
'Acceso denegado. Esta cuenta no es administradora.':'Access denied. This account is not an admin.',
'Login admin correcto.':'Admin signed in.',
'Login correcto.':'Signed in.',
'No se pudo registrar la descarga:':'Could not log the download:',
'No encuentro ese equipo.':'Team not found.',
'Inicia sesión para unirte a un equipo.':'Sign in to join a team.',
'Ya perteneces a este equipo.':'You already belong to this team.',
'Ya tienes una solicitud pendiente para este equipo.':'You already have a pending request for this team.',
'{}Mensaje para el team manager de {} (opcional):':'{}Message for the team manager of {} (optional):',
'Solicitud enviada a {}. Te avisaremos aquí cuando el team manager responda.':'Request sent to {}. We will let you know here when the team manager replies.',
'¿Cancelar la solicitud?':'Cancel the request?',
'Solicitud cancelada.':'Request cancelled.',
'Elige un equipo de la lista.':'Choose a team from the list.',
'Ese equipo no está en la lista oficial. Puedes crearlo con «Crear mi equipo».':'That team is not on the official list. You can create it with «Create my team».',
'No perteneces a ningún equipo.':'You do not belong to any team.',
'¿Salir del equipo "{}"?':'Leave team "{}"?',
'Has salido del equipo.':'You have left the team.',
'¿Aceptar a {} en {}?':'Accept {} into {}?',
'¿Rechazar a {} en {}?':'Reject {} from {}?',
'¿Aceptar a {}?':'Accept {}?',
'¿Rechazar a {}?':'Reject {}?',
'Pendiente':'Pending',
'Creación':'Founded',
'Foto':'Photo',
'Piloto aceptado: ya forma parte del equipo.':'Driver accepted: they are now part of the team.',
'Solicitud rechazada.':'Request rejected.',
'Solicitud actualizada.':'Request updated.',
'No encuentro esa noticia.':'News item not found.',
'Escribe tu usuario de Discord.':'Enter your Discord username.',
'El nombre del equipo debe tener al menos 3 caracteres.':'The team name must be at least 3 characters long.',
'Ya existe un equipo con ese nombre.':'A team with that name already exists.',
'El enlace de {} debe empezar por https://':'The {} link must start with https://',
'Saldrás de "{}" y pasarás a ser team manager de "{}". ¿Continuar?':'You will leave "{}" and become team manager of "{}". Continue?',
'Esta función todavía no está activada en Supabase (falta ejecutar supabase-setup.sql).':'This feature is not enabled yet. Please contact the organisers.',
'La subida de imágenes no está activada en Supabase (falta ejecutar supabase-setup.sql). De momento puedes pegar una URL.':'Image uploads are not enabled yet. For now you can paste a URL.',
'Falta activar las fotos de perfil en Supabase (ejecuta supabase-setup.sql).':'Profile photos are not enabled yet.',
'No se pudieron cargar los pilotos apuntados':'Could not load the entered drivers',
'Cargando...':'Loading...',

/* ---------- Países (solo cambia el texto que se ve, no el valor guardado) ---------- */
'Albania':'Albania','Alemania':'Germany','Andorra':'Andorra','Argentina':'Argentina','Armenia':'Armenia',
'Australia':'Australia','Austria':'Austria','Azerbaiyán':'Azerbaijan','Bielorrusia':'Belarus',
'Bosnia y Herzegovina':'Bosnia and Herzegovina','Brasil':'Brazil','Bulgaria':'Bulgaria','Bélgica':'Belgium',
'Canadá':'Canada','Chile':'Chile','Chipre':'Cyprus','Colombia':'Colombia','Croacia':'Croatia',
'Dinamarca':'Denmark','Eslovaquia':'Slovakia','Eslovenia':'Slovenia','España':'Spain',
'Estados Unidos':'United States','Estonia':'Estonia','Finlandia':'Finland','Francia':'France',
'Georgia':'Georgia','Grecia':'Greece','Hungría':'Hungary','Irlanda':'Ireland','Islandia':'Iceland',
'Italia':'Italy','Japón':'Japan','Kazajistán':'Kazakhstan','Kosovo':'Kosovo','Letonia':'Latvia',
'Liechtenstein':'Liechtenstein','Lituania':'Lithuania','Luxemburgo':'Luxembourg',
'Macedonia del Norte':'North Macedonia','Malta':'Malta','Marruecos':'Morocco','Moldavia':'Moldova',
'Montenegro':'Montenegro','México':'Mexico','Mónaco':'Monaco','Noruega':'Norway',
'Nueva Zelanda':'New Zealand','Países Bajos':'Netherlands','Polonia':'Poland','Portugal':'Portugal',
'Reino Unido':'United Kingdom','República Checa':'Czech Republic','Rumanía':'Romania','Rusia':'Russia',
'San Marino':'San Marino','Serbia':'Serbia','Suecia':'Sweden','Suiza':'Switzerland','Turquía':'Turkey',
'Ucrania':'Ukraine','Uruguay':'Uruguay','Vaticano':'Vatican City','Venezuela':'Venezuela'
};

/* ----------------------------------------------------------------- */
const STORE='vrc_lang';
const SKIP='[data-i18n-skip],#adminContent,#registrationTableModal,#downloadLogModal,#registrationHistoryModal,script,style,textarea,[contenteditable="true"]';
const ATTRS=['placeholder','title','aria-label','alt'];
const RERENDER=['home','news','pruebas','championships','ranking','safety']; // páginas sin formularios: se repintan al cambiar idioma (fechas)

const norm=s=>String(s).replace(/\s+/g,' ').trim();
const esc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const EXACT=new Map(), PATTERNS=[], PHRASES=[];
for(const [k,v] of Object.entries(DICT)){
  const key=norm(k);
  if(key.includes('{}')){
    PATTERNS.push({re:new RegExp('^'+esc(key).replace(/\\\{\\\}/g,'(.*?)')+'$'),v});
  }else{
    EXACT.set(key,v);
    if(key.includes(' ')&&key.length>=10)PHRASES.push({k:key,v});
  }
}
PHRASES.sort((a,b)=>b.k.length-a.k.length);

let lang='es';
try{
  const saved=localStorage.getItem(STORE);
  if(saved==='es'||saved==='en')lang=saved;
  else if(navigator.language&&!/^es\b/i.test(navigator.language))lang='en'; // primera visita: idioma del navegador
}catch(e){}

function translate(text){
  if(lang==='es'||text==null)return text;
  const s=String(text);
  const core=norm(s);
  if(!core||!/[A-Za-zÀ-ÿ]/.test(core))return s;
  let out=EXACT.get(core);
  if(out==null){
    for(const p of PATTERNS){
      const m=core.match(p.re);
      if(m){let i=0;out=p.v.replace(/\{\}/g,()=>{const g=m[++i]||'';return EXACT.get(norm(g))??g});break}
    }
  }
  if(out==null){ // frase conocida dentro de un texto más largo
    let r=core,hit=false;
    for(const ph of PHRASES){if(r.includes(ph.k)){r=r.split(ph.k).join(ph.v);hit=true}}
    if(hit)out=r;
  }
  if(out==null)return s;
  const lead=s.match(/^\s*/)[0],trail=s.match(/\s*$/)[0];
  return lead+out+trail;
}

/* Guardamos el texto original (español) de cada nodo para poder volver atrás */
const textState=new WeakMap(), attrState=new WeakMap();
const skipped=el=>!el||!!el.closest(SKIP);

function doText(node){
  if(skipped(node.parentElement))return;
  const cur=node.nodeValue;let st=textState.get(node);
  if(!st||cur!==st.applied){st={orig:cur};textState.set(node,st)}
  const next=lang==='es'?st.orig:translate(st.orig);
  st.applied=next;
  if(cur!==next)node.nodeValue=next;
}
function doAttr(el,name){
  if(!el.hasAttribute(name)||skipped(el))return;
  const cur=el.getAttribute(name);
  let map=attrState.get(el);if(!map){map={};attrState.set(el,map)}
  let st=map[name];
  if(!st||cur!==st.applied){st={orig:cur};map[name]=st}
  const next=lang==='es'?st.orig:translate(st.orig);
  st.applied=next;
  if(cur!==next)el.setAttribute(name,next);
}
function walk(root){
  if(!root)return;
  if(root.nodeType===3){doText(root);return}
  if(root.nodeType!==1&&root.nodeType!==9&&root.nodeType!==11)return;
  if(root.nodeType===1){if(skipped(root))return;ATTRS.forEach(a=>doAttr(root,a))}
  const tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  let n;while((n=tw.nextNode()))doText(n);
  if(root.querySelectorAll)root.querySelectorAll('[placeholder],[title],[aria-label],[alt]').forEach(el=>ATTRS.forEach(a=>doAttr(el,a)));
}

const observer=new MutationObserver(list=>{
  for(const m of list){
    if(m.type==='characterData')doText(m.target);
    else if(m.type==='attributes')doAttr(m.target,m.attributeName);
    else m.addedNodes.forEach(walk);
  }
});

/* alert / confirm / prompt también se traducen */
const _alert=window.alert.bind(window),_confirm=window.confirm.bind(window),_prompt=window.prompt.bind(window);
window.alert=msg=>_alert(translate(msg));
window.confirm=msg=>_confirm(translate(msg));
window.prompt=(msg,def)=>_prompt(translate(msg),def);

function paintButton(){
  document.querySelectorAll('[data-lang-btn]').forEach(b=>{
    b.classList.toggle('active',b.dataset.langBtn===lang);
    b.setAttribute('aria-pressed',b.dataset.langBtn===lang?'true':'false');
  });
}
function setLang(next){
  if(next!=='es'&&next!=='en'||next===lang)return;
  lang=next;
  try{localStorage.setItem(STORE,lang)}catch(e){}
  document.documentElement.lang=lang;
  walk(document.body);
  paintButton();
  const active=document.querySelector('.page.active');
  if(active&&RERENDER.includes(active.id)&&typeof onPageShown==='function'){try{onPageShown(active.id)}catch(e){}}
}

window.uiLocale=()=>lang==='en'?'en-GB':'es-ES';
window.t=translate;
window.setLang=setLang;
window.getLang=()=>lang;

document.documentElement.lang=lang;
walk(document.body);
paintButton();
observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:ATTRS});
})();
