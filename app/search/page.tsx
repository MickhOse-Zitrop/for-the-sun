"use client";

import { RefreshCcw, ScanHeart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SearchPage() {
  const [activeQuestions, setActiveQuestions] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();
  const questions = [
    "Почему моя девушка так хороша, что даже её смех заставляет меня улыбаться?",
    "Как объяснить моей девушке, что она слишком прекрасна для этого мира?",
    "Почему я каждый раз теряю дар речи, когда смотрю на неё?",
    "Можно ли считать, что я выиграл лотерею, потому что встретил такую девушку?",
    "Почему у меня всегда мурашки, когда она рядом?",
    "Как сделать так, чтобы моя девушка знала, насколько она уникальна?",
    "Почему каждое утро начинается лучше, когда я вижу её лицо?",
    "Как сказать ей, что она – лучшее, что со мной случилось?",
    "Почему мои друзья завидуют тому, какая у меня потрясающая девушка?",
    "Может ли кто-то объяснить, почему она до сих пор со мной?",
    "Почему она такая добрая, что даже солнце ей завидует?",
    "Как убедить её, что она идеальная?",
    "Почему каждый день с ней кажется особенным?",
    "Почему её улыбка делает мой мир ярче?",
    "Как правильно выразить ей свою любовь без лишних слов?",
    "Почему каждая мелочь, которую она делает, кажется такой милой?",
    "Как заставить себя перестать думать о том, как сильно я её люблю?",
    "Почему мне хочется проводить с ней каждую минуту своей жизни?",
    "Как найти слова, чтобы описать, какой она невероятной является?",
    "Почему сердце бьётся быстрее, когда она просто смотрит на меня?",
    "Почему она всегда знает, что мне нужно, даже раньше меня?",
    "Как объяснить ей, что её смех — лучший звук на свете?",
    "Почему я чувствую себя самым счастливым человеком на планете, когда она рядом?",
    "Как убедить её, что она самая умная девушка, которую я знаю?",
    "Почему её обнимашки такие тёплые, что согревают душу?",
    "Как сказать ей, что её голос звучит как музыка для моих ушей?",
    "Почему каждая наша встреча превращается в праздник?",
    "Как объяснить ей, что она вдохновляет меня на великие дела?",
    "Почему мне никогда не надоедает слушать её истории?",
    "Как убедить её, что она – моя муза?",
    "Почему каждый её взгляд заставляет моё сердце биться чаще?",
    "Как сделать так, чтобы она поняла, что я ценю каждую секунду, проведённую вместе?",
    "Почему каждое утро начинается с мысли о ней?",
    "Как рассказать ей, что она – самое большое счастье в моей жизни?",
    "Почему, когда она смеётся, весь мир становится ярче?",
    "Как объяснить ей, что ни одна другая девушка не сравнится с ней?",
    "Почему всё вокруг кажется прекрасным, когда она рядом?",
    "Как убедить её, что она – мой личный ангел-хранитель?",
    "Почему мы так хорошо понимаем друг друга без слов?",
    "Как показать ей, что она – самый важный человек в моей жизни?",
    "Почему ей удаётся сделать мой день лучше одним лишь присутствием?",
    "Как объяснить ей, что я готов ради неё на любые подвиги?",
    "Почему её глаза кажутся такими глубокими и загадочными?",
    "Как убедить её, что она – лучшая подруга, которую я мог бы пожелать?",
    "Почему даже её молчание говорит мне больше, чем тысячи слов?",
    "Как доказать ей, что я действительно счастлив рядом с ней?",
    "Почему у нас столько общих интересов, что нам никогда не скучно?",
    "Как объяснить ей, что наши отношения – это настоящее чудо?",
    "Почему каждой ночью я мечтаю о ней?",
    "Как убедить её, что она – та единственная, кого я искал всю жизнь?",
    "Почему её прикосновения заставляют меня чувствовать себя защищённым?",
    "Как выразить ей благодарность за то, что она есть в моей жизни?",
    "Почему время летит незаметно, когда мы вместе?",
    "Как узнать, любит ли она меня так же сильно, как я её?",
    "Почему она всегда находит способ поднять мне настроение?",
    "Как убедить её, что она – самая заботливая девушка, которую я встречал?",
    "Почему её смех заразителен?",
    "Как объяснить ей, что её поддержка значит для меня очень многое?",
    "Почему я чувствую себя таким уверенным, когда она рядом?",
    "Как заставить её понять, что она – главная причина моего счастья?",
    "Почему её взгляды проникают прямо в мою душу?",
    "Как признаться ей, что я не представляю своей жизни без неё?",
    "Почему мне нравится слышать её мнение по любому вопросу?",
    "Как убедить её, что она – настоящий подарок судьбы?",
    "Почему каждая наша встреча кажется особенной?",
    "Как объяснить ей, что я горжусь тем, что она моя девушка?",
    "Почему её присутствие делает любой день незабываемым?",
    "Как продемонстрировать ей, что я дорожу каждым моментом, проведённым вместе?",
    "Почему все мои мечты связаны с ней?",
    "Как убедить её, что она – воплощение всех моих фантазий?",
    "Почему её улыбка способна растопить любое моё недовольство?",
    "Как рассказать ей, что я благодарен судьбе за встречу с ней?",
    "Почему каждый разговор с ней приносит мне радость?",
    "Как уговорить её переехать ко мне поближе?",
    "Почему её внимание к мелочам делает нашу связь крепче?",
    "Как объяснить ей, что я никогда не смогу забыть её?",
    "Почему её комплименты делают меня счастливым?",
    "Как убедить её, что она – самый ценный человек в моей жизни?",
    "Почему вся вселенная заговорила, когда мы встретились?",
    "Как показать ей, что я готов защищать её от любых бед?",
    "Почему её вкусовые предпочтения совпадают с моими?",
    "Как доказать ей, что я буду верным спутником на протяжении всей нашей жизни?",
    "Почему её шутки вызывают у меня улыбку?",
    "Как поблагодарить её за то, что она сделала меня лучше?",
    "Почему даже самые простые вещи становятся волшебными, когда они происходят с ней?",
    "Как объяснить ей, что наше будущее вместе – это то, о чём я мечтаю?",
    "Почему её терпение и понимание поражают меня?",
    "Как убедить её, что она – источник вдохновения для всего, что я делаю?",
    "Почему её запах напоминает мне о самых счастливых моментах?",
    "Как сказать ей, что я люблю её сильнее, чем могу выразить словами?",
    "Почему её голос успокаивает меня, когда я нервничаю?",
    "Как выразить ей своё восхищение её добротой?",
    "Почему мы всегда находим общий язык, несмотря на разные интересы?",
    "Как убедить её, что она – идеальный партнёр для меня?",
    "Почему её идеи кажутся мне самыми гениальными?",
    "Как объяснить ей, что я ценю её поддержку и понимание?",
    "Почему её советы всегда оказываются правильными?",
    "Как признаться ей, что я не хочу расставаться с ней ни на минуту?",
    "Почему её энергия заряжает меня позитивом?",
    "Как убедить её, что она – самое важное, что у меня есть?",
    "Почему её взгляд проникает прямо в моё сердце?",
    "Как сообщить ей, что я рад каждому дню, который провожу с ней?",
    "Почему её присутствие делает меня увереннее?",
    "Как подтвердить ей, что она – моя любимая девушка?",
    "Почему её искренность трогает меня до глубины души?",
    "Как удостоверить её, что я всегда буду рядом?",
    "Почему её чувства важны для меня больше всего на свете?",
    "Как рассказать ей, что она – смысл моей жизни?",
    "Почему её объятия греют меня изнутри?",
    "Как проявить к ней уважение и заботу, которых она заслуживает?",
    "Почему её успехи радуют меня больше, чем свои собственные?",
    "Как обсудить с ней наши общие цели и планы на будущее?",
    "Почему её честность вызывает у меня доверие?",
    "Как убедиться, что она чувствует себя любимой и счастливой?",
    "Почему её юмор помогает мне справляться с трудностями?",
    "Как подчеркнуть, что она – единственный человек, которого я хочу видеть рядом?",
    "Почему её мудрость поражает меня?",
    "Как показать ей, что я готов учиться у неё всю жизнь?",
    "Почему её забота о других людях вдохновляет меня?",
    "Как объяснить ей, что её внимание к деталям делает её уникальной?",
    "Почему её уверенность в себе притягивает меня?",
    "Как напомнить ей, что я всегда поддержу её решения?",
    "Почему её решительность помогает мне двигаться вперёд?",
    "Как передать ей, что она – мой лучший друг?",
    "Почему её умение слушать делает её незаменимой?",
    "Как продемонстрировать ей, что я уважаю её независимость?",
    "Почему её креативность удивляет меня?",
    "Как предложить ей новые совместные приключения?",
    "Почему её преданность вызывает у меня чувство безопасности?",
    "Как внушить ей, что я доверяю ей полностью?",
    "Почему её целеустремлённость мотивирует меня?",
    "Как похвалить её за достижения и успехи?",
    "Почему её страсть к жизни заражает меня?",
    "Как поддерживать её в моменты сомнений и неуверенности?",
    "Почему её дружелюбие привлекает к ней людей?",
    "Как разделить с ней радость от маленьких побед?",
    "Почему её открытость позволяет нам быть откровенными друг с другом?",
    "Как выразить ей благодарность за то, что она учит меня новому?",
    "Почему её сила духа восхищает меня?",
    "Как укрепить нашу связь через совместные увлечения?",
    "Почему её спокойствие помогает мне сохранять хладнокровие?",
    "Как научить её доверять своим инстинктам?",
    "Почему её стремление к самосовершенствованию вдохновляет меня?",
    "Как объяснить ей, что она – источник моего вдохновения?",
    "Почему её настойчивость в достижении целей служит примером для меня?",
    "Как поощрять её творческие начинания?",
    "Почему её терпимость к моим недостаткам делает её идеальной?",
    "Как демонстрировать ей, что я ценю её усилия?",
    "Почему её способность прощать делает её сильной личностью?",
    "Как обеспечить ей комфорт и уют в наших отношениях?",
    "Почему её доброта делает этот мир лучше?",
    "Как напоминать ей, что она важна для меня?",
    "Почему её вера в меня укрепляет мою уверенность?",
    "Как выражать ей свою признательность за её помощь?",
    "Почему её щедрость делает её особенно привлекательной?",
    "Как подчёркивать её лучшие качества?",
    "Почему её стойкость перед лицом трудностей восхищает меня?",
    "Как показать ей, что я горжусь ею?",
    "Почему её оптимизм помогает мне смотреть на жизнь с надеждой?",
    "Как помогать ей реализовывать её мечты?",
    "Почему её интуиция часто оказывается права?",
    "Как укреплять нашу эмоциональную связь?",
    "Почему её искренние эмоции делают её настоящей?",
    "Как хвалить её за маленькие победы?",
    "Почему её упорство в достижении целей вдохновляет меня?",
    "Как проявлять к ней нежность и заботу?",
    "Почему её юмор помогает нам преодолевать трудности?",
    "Как делиться с ней своими мыслями и чувствами?",
    "Почему её самообладание помогает мне оставаться спокойным?",
    "Как обсуждать с ней наши общие ценности и убеждения?",
    "Почему её жизнерадостность заряжает меня энергией?",
    "Как говорить ей о своих страхах и сомнениях?",
    "Почему её решительность помогает мне принимать важные решения?",
    "Как создавать с ней совместные воспоминания?",
    "Почему её творчество обогащает нашу жизнь?",
    "Как показывать ей, что я заинтересован в её успехах?",
    "Почему её понимание помогает нам решать конфликты?",
    "Как поддерживать её в трудные времена?",
    "Почему её готовность идти на компромисс делает наши отношения прочными?",
    "Как вдохновлять её на достижение новых высот?",
    "Почему её любознательность открывает перед нами новые горизонты?",
    "Как убеждать её в том, что она может достичь всего, чего захочет?",
    "Почему её сострадание делает её настоящим человеком?",
    "Как развивать наши отношения, делая их ещё крепче?",
    "Почему её смелость помогает мне преодолеть страхи?",
    "Как обеспечивать ей эмоциональную поддержку?",
    "Почему её энтузиазм заряжает меня позитивом?",
    "Как строить с ней планы на будущее?",
    "Почему её чувство юмора делает наши дни веселее?",
    "Как находить с ней компромиссы и решать проблемы?",
    "Почему её забота о близких делает её замечательным человеком?",
    "Как подтверждать ей, что она важная часть моей жизни?",
    "Почему её амбиции вдохновляют меня на большие свершения?",
    "Как подчёркивать её значимость в моей жизни?",
    "Почему её умение слушать делает её лучшим собеседником?",
    "Как рассказывать ей о своих мечтах и планах?",
    "Почему её способность понимать меня без слов делает её уникальной?",
    "Как доказывать ей, что я всегда буду рядом?",
    "Почему её теплота и забота делают меня счастливым?",
    "Как выражать ей свою любовь и привязанность?",
  ];

  function handleForm(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (inputValue.toLowerCase().includes("как давно мы вместе")) {
      router.replace("/main");
    } else {
      router.push(`/error?query=${inputValue}`);
    }
  }

  function handleQuestions() {
    setActiveQuestions([]);

    const numbers: number[] = [];

    for (let i = 0; i < 3; i++) {
      let randomNumber = Math.floor(Math.random() * 200);

      while (activeQuestions.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 200);
      }
      numbers.push(randomNumber);
    }
    setTimeout(() => setActiveQuestions(numbers), 500);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleQuestions(), []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary-foreground">
      <div className="w-full p-10 md:p-20 lg:w-1/2 ">
        <div className="flex items-center justify-center gap-3 mb-6 md:mb-12">
          <ScanHeart className="text-primary" size={60} />
          <h1 className="text-primary text-4xl md:text-5xl">LoveSearch</h1>
        </div>
        <form
          onSubmit={handleForm}
          className="flex w-full items-center space-x-2"
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Напишите запрос"
            onClick={() =>
              toast("Настоятельный совет", {
                description: 'Напиши в поиске "Как давно мы вместе?"',
              })
            }
          />
          <Button type="submit" size="sm">
            <Search />
          </Button>
        </form>
        <div>
          <div className="flex items-center gap-3 my-6 justify-center md:justify-start">
            <h3 className="md:text-2xl text-lg font-medium">
              Популярные запросы:
            </h3>
            <Button size="sm" onClick={handleQuestions}>
              <RefreshCcw />
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            {activeQuestions.length > 0
              ? activeQuestions.map((id) => (
                  <p key={id} className="flex gap-1 text-primary opacity-75">
                    <Search />
                    {questions[id]}
                  </p>
                ))
              : Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton className="h-4 w-[250px] bg-primary" key={i} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}