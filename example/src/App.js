import React, { useState, useEffect, useRef } from 'react';

import StickyISI from 'sticky-isi';

const App = () => {
  const footerRef = useRef(null);
  const ISI_HEIGHT = 150;
  const [elmRef, setElmRef] = useState(null);

  useEffect(() => {
    setElmRef(footerRef.current);
  }, []);

  return (
    <div>
      <div id='lipsum'>
        <p>
          Integer ut sapien enim. Vestibulum consectetur ex faucibus, vestibulum
          justo sed, pulvinar lorem. Mauris bibendum lacus nisl, vitae maximus
          metus vulputate vitae. In varius bibendum nibh nec dictum. Nunc
          tristique, felis hendrerit consequat pharetra, sem est lacinia mi,
          faucibus pellentesque tellus tellus porta arcu. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Proin erat eros, condimentum eget cursus sed, feugiat sed orci.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Sed rhoncus volutpat
          rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Mauris ultricies lorem in turpis
          euismod pharetra rutrum et purus. Sed sit amet sagittis ipsum. Nunc
          luctus erat a risus elementum ultrices. Integer dictum purus a nisl
          euismod, id luctus sem rhoncus. Nam in mi faucibus, dapibus risus non,
          mollis ante. Fusce et tellus viverra, consequat metus a, vulputate
          diam. Duis id nisi massa. Curabitur augue est, scelerisque at ipsum
          vestibulum, commodo dignissim lacus. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae;
        </p>
        <p>
          Nam nec iaculis metus. Praesent consequat orci eu scelerisque
          consectetur. Phasellus mattis nunc nisi, tincidunt luctus quam tempor
          tempus. Ut vel consectetur tellus. Donec eu sem quis velit hendrerit
          luctus. Nulla gravida, purus non luctus accumsan, leo est venenatis
          nisi, ac tempus tortor massa vitae nulla. Vestibulum nec mollis nisi.
          Suspendisse consectetur arcu vel elit fringilla dapibus.
        </p>
        <p>
          In hac habitasse platea dictumst. Nulla imperdiet condimentum orci, ac
          aliquet dolor sollicitudin sit amet. Aliquam fringilla leo eget magna
          consectetur porttitor. Quisque eu cursus ipsum, eget scelerisque
          libero. Morbi at nisi sem. Nullam ornare libero at lectus eleifend
          porta. Curabitur pulvinar purus id aliquam suscipit. Praesent in
          porttitor ipsum. Pellentesque lacus ante, elementum quis dictum
          imperdiet, tristique fringilla magna. Fusce vitae molestie eros.
          Suspendisse erat enim, commodo non elit nec, egestas luctus felis.
          Pellentesque efficitur dapibus nisl vitae fringilla.
        </p>
        <p>
          Quisque eu neque erat. Nam eget sapien at odio commodo sollicitudin
          mattis a elit. Mauris orci augue, cursus eu varius a, vulputate vel
          augue. Praesent ut mauris semper, volutpat mi et, tincidunt lorem. Sed
          vehicula auctor nibh, vitae ultricies enim consequat non. Curabitur
          laoreet ac nisi sit amet vehicula. Curabitur gravida viverra nunc ac
          porttitor. Nunc vel nunc cursus, vestibulum diam nec, egestas risus.
          Aenean elementum eget risus et congue. Pellentesque auctor ligula ut
          congue semper. Suspendisse accumsan sapien sapien, ut malesuada massa
          interdum in. Sed tempus magna est. Suspendisse potenti.
        </p>
        <p>
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Aliquam vulputate egestas hendrerit. Morbi sit
          amet odio varius, euismod ipsum vel, sodales lacus. Donec nec bibendum
          tellus. Praesent tempor euismod elit, sed imperdiet erat consequat at.
          Donec sit amet tellus ut ligula pellentesque ullamcorper vitae et
          nibh. Suspendisse potenti. Donec diam lectus, vestibulum a pharetra
          in, fermentum vel ligula. Aliquam erat volutpat. Integer at sem sed
          ante cursus efficitur. Vivamus iaculis ante nec magna tempus, sed
          accumsan est sodales. Pellentesque sodales hendrerit mauris nec
          cursus. Curabitur fringilla lectus ornare dictum venenatis. Sed
          volutpat dui in rutrum ultricies. Duis ullamcorper euismod aliquam.
        </p>
        <p>
          Vestibulum enim purus, molestie eget dapibus non, mollis at neque. Sed
          viverra non velit et ornare. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Cras mauris nulla, fermentum vitae augue ut,
          condimentum auctor ex. Nulla congue ex vel turpis eleifend porttitor.
          Mauris blandit odio vitae luctus congue. Donec sed eros id dui
          pulvinar pellentesque. Aliquam erat volutpat. Suspendisse consequat
          nisi condimentum, luctus orci sed, pretium nibh. Vivamus nibh enim,
          varius ut justo sed, feugiat condimentum justo. Quisque non
          pellentesque nulla, vel ultricies libero. Proin tempus congue nisi ut
          ultrices. Donec quis finibus risus. Sed ac dictum metus. Pellentesque
          dui est, tempor ut bibendum non, gravida id orci.
        </p>
        <p>
          Pellentesque id ligula iaculis, aliquam dolor non, bibendum turpis.
          Proin sodales nibh molestie dui consectetur commodo. Phasellus sed
          bibendum odio. Aliquam vel urna non justo ullamcorper vestibulum in
          sit amet mi. Integer non libero sodales, venenatis mauris sit amet,
          tristique lectus. Proin luctus pulvinar iaculis. Nulla tempor
          vulputate ex, a efficitur neque dignissim ac. Donec iaculis odio non
          elit pulvinar eleifend.
        </p>
        <p>
          Etiam lorem tellus, pretium vel efficitur gravida, scelerisque nec
          urna. Suspendisse varius efficitur nisi. Duis mattis, quam ut sodales
          luctus, justo orci efficitur diam, sit amet rhoncus tortor erat quis
          orci. Nulla at accumsan sem, eget aliquam neque. Donec in volutpat
          ante, eget ornare quam. Maecenas elementum sed magna fringilla dictum.
          Vestibulum sodales diam ut erat feugiat euismod. Mauris eget quam ac
          est posuere sagittis. Suspendisse dolor nibh, efficitur eu nunc in,
          pulvinar dignissim lectus. Nunc fringilla lorem sit amet purus
          ultrices pretium. Suspendisse imperdiet ornare magna ut commodo.
          Praesent tempus a mi vel blandit. Praesent maximus eu arcu ut
          fringilla. Aenean vitae sodales est, ac lobortis neque.
        </p>
        <p>
          Quisque eros purus, laoreet sit amet sollicitudin ut, tincidunt nec
          nibh. Nunc laoreet suscipit scelerisque. Vestibulum commodo diam
          tempus, aliquet ipsum ut, bibendum est. In mollis est convallis arcu
          tristique, ac vestibulum dolor placerat. Quisque porttitor tortor eu
          pellentesque efficitur. Vivamus varius urna sit amet neque iaculis
          scelerisque. Cras molestie elit non mi luctus venenatis. Etiam eget
          neque et leo bibendum accumsan. Praesent quis dolor ante. Proin
          dignissim mauris at ex fermentum vehicula. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Fusce hendrerit ipsum porta vestibulum convallis. Nunc non malesuada
          purus. Vestibulum in odio quis nulla malesuada lacinia vitae rutrum
          lorem. Morbi posuere eleifend nibh et tristique. Donec dui purus,
          lobortis ut pellentesque interdum, imperdiet vel magna.
        </p>
        <p>
          Quisque rutrum elit nisl, in sagittis ante pulvinar hendrerit. Mauris
          in mi metus. Nulla pretium scelerisque erat. Nullam at erat ac arcu
          dictum varius non quis arcu. Integer vitae libero et metus tincidunt
          volutpat ullamcorper a lorem. Aliquam scelerisque condimentum risus ut
          mollis. Nunc a ligula eu dolor tincidunt luctus in a lacus.
        </p>
        <p>
          In at congue ligula. Phasellus pretium at turpis eget sodales. Donec
          aliquet metus ac euismod placerat. Sed nec nibh mattis, lacinia quam
          vitae, mollis purus. Cras ultrices turpis et velit efficitur, et
          pellentesque eros iaculis. Nunc iaculis sollicitudin tortor at
          eleifend. Aliquam in orci ac risus sagittis sodales. Aliquam congue
          libero dictum, rhoncus risus vel, condimentum dolor.
        </p>
        <p>
          Aliquam auctor efficitur dignissim. Nullam facilisis odio vitae ante
          egestas egestas. Maecenas volutpat ornare ex. Donec sit amet turpis
          sed erat sollicitudin sodales a quis elit. Aenean vitae leo et felis
          tempor lobortis a in lacus. Vivamus ultricies felis massa, eget
          aliquet augue varius in. Nullam a nibh vel urna elementum finibus sed
          sit amet sem.
        </p>
        <p>
          Suspendisse in turpis eget augue aliquam dignissim. Suspendisse luctus
          enim sit amet ipsum dapibus, eget molestie erat bibendum. Proin
          tristique consequat lacus ac ornare. Donec in gravida lectus, ut
          viverra leo. Mauris metus turpis, laoreet eget quam eu, eleifend
          finibus enim. Morbi vitae interdum massa. Ut nulla purus, dictum
          tempor purus nec, ullamcorper viverra nisi. Proin erat ligula,
          malesuada quis odio eget, blandit venenatis lacus. Proin et augue mi.
          Suspendisse porttitor vehicula sapien ac tincidunt. Duis vulputate et
          ligula vel molestie. Donec condimentum leo non ipsum finibus, accumsan
          rhoncus lacus mattis. Etiam convallis tristique nunc, at venenatis
          velit sagittis et. Sed non mattis libero, eu auctor neque. Sed viverra
          risus id nunc tincidunt pretium.
        </p>
        <p>
          Nam mi tortor, efficitur ac ultricies sed, sagittis quis ex. Nulla
          ullamcorper, elit non finibus feugiat, neque ex faucibus nulla, eu
          commodo felis arcu eu turpis. Vivamus justo augue, varius nec egestas
          sit amet, congue et metus. Curabitur dictum mi in magna imperdiet
          auctor. Curabitur tincidunt aliquet elit at tristique. Mauris viverra
          quam eget purus hendrerit, congue egestas urna ultricies. In non
          lacinia libero, pharetra facilisis nulla. Donec in ligula nibh. Ut
          ultrices ligula volutpat, auctor metus nec, ultrices elit. Nam ac orci
          sed lectus pretium venenatis vel eget metus. Vestibulum et velit vitae
          sem eleifend molestie a non libero. Mauris in felis vel tortor feugiat
          hendrerit sit amet quis lectus.
        </p>
      </div>

      {elmRef && (
        <StickyISI
          footerRef={elmRef}
          stickyHeight={ISI_HEIGHT}
          stickyStyles={{
            height: ISI_HEIGHT,
            backgroundColor: 'yellow'
          }}
        >
          <h2>Indication</h2>
          Lorem ipsum dolor sit amet, falli erant utinam ius an, quod hinc dicit
          eu pro, an inciderint theophrastus delicatissimi usu. Et vis etiam
          detraxit. Pro an affert aeterno ponderum. Ad sit feugait suscipit, in
          qui ullum tollit docendi, corpora principes appellantur pro in. Dicant
          aliquip delectus et nam, usu ea utinam volutpat delicatissimi, mel ut
          dicat scripta. Ne vim nostro blandit. Mel paulo deleniti explicari te.
          An facer animal omittam sit, ornatus salutatus pri ne. Ut duo debet
          consul eleifend. Quem meliore ut sea, vix justo summo disputationi ex.
          In his deserunt adipisci, in congue nostro pro, no nostro ornatus
          similique cum. Et iisque principes vim. Sed quis dolorem denique et,
          no nostrud consulatu complectitur vix. Vix cu tation dolore accusata,
          vide comprehensam ut pro. Primis omittam ad pri. Cu accusata nominati
          cum, eam eros porro sonet te. Dicat mazim vix an, tollit consequat eum
          id. Veniam quodsi est te. Ea ius brute corpora adipiscing, te eum
          facer perpetua adipiscing, adhuc saperet senserit pri et. Iuvaret
          complectitur eos ex, dicat imperdiet eam in, id dolores verterem pri.
          Ut sea modus utamur. Vis eius feugiat ea, tota populo molestiae ex
          cum. Populo neglegentur et nam, et dicta labores sed. Duo inani
          detracto ea. Ad duo tota possit, brute blandit at usu. Sea essent
          expetenda scripserit ex. Pri inimicus scripserit dissentiet ne. Partem
          splendide eu per, audiam ponderum mei at, tota ipsum senserit sed id.
          Velit postulant eos ei. Cu vel simul civibus. Pro ei facete
          theophrastus. Ut nec debitis accusata urbanitas. Ferri illum
          abhorreant mei ei, eu audire periculis his, ex usu minim numquam
          indoctum. Quis possim vivendo vis te, per cu putent offendit. Mei
          putant scaevola ne, mea ex vide utroque. Recteque iudicabit vis at. Ad
          sit elaboraret adversarium, ius at dolores scribentur, his ad aeque
          ocurreret. Case noster persequeris pro in, unum percipitur est ne. Usu
          vidit putant facilisi at, vero moderatius eu mea, suscipit placerat
          inimicus vix ad. Definiebas constituam reprehendunt duo in, sed dico
          quando maiestatis et. Liber viderer fabellas in mei. Vel soluta
          consulatu ad, in cum reque verear elaboraret, nec no alii error. Ad
          eam tantas scripta, summo diceret facilis an qui. Eam ut omnis
          vivendum elaboraret. Qui ex dicta gloriatur, atomorum repudiare ei
          eos, at his duis salutandi sadipscing. Rebum iriure duo in. Ea nec
          tantas persecuti, sanctus minimum vim id. Duis mutat reformidans ut
          vis, meliore voluptaria duo ad. Zril contentiones te duo, in aliquip
          temporibus eum, sea iudico aeterno an.
        </StickyISI>
      )}
      <footer ref={footerRef}>
        <h2>Footer</h2>
        <p>
          Proin et blandit est, a dignissim felis. In hendrerit odio nec erat
          accumsan facilisis. Sed non odio at ante consectetur consectetur. In
          id facilisis elit. Vestibulum quis tristique odio. Integer dapibus
          ornare porttitor. Donec ac leo non purus hendrerit finibus. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Vestibulum in sem id dolor interdum consectetur in sed dolor.
          Nam a dignissim odio, non varius nibh. Fusce tincidunt, justo nec
          facilisis pharetra, dui diam dignissim dui, ut sodales ligula diam id
          justo.
        </p>
        <p>
          Duis bibendum vestibulum rhoncus. Sed vitae sapien in massa porttitor
          porta quis quis dolor. Nullam tincidunt finibus lorem, vestibulum
          eleifend urna auctor vitae. Praesent lorem eros, consequat in nunc
          vel, pharetra malesuada mi. Proin nec mauris nulla. Integer vitae dui
          eu leo pretium mattis. Integer sit amet ex maximus, placerat orci
          eget, varius enim. Morbi a laoreet est, vel commodo tellus.
        </p>
        <p>
          Nullam placerat, nisi ut fermentum bibendum, nisl dui aliquam tellus,
          id pulvinar turpis velit ut risus. Quisque sed cursus leo. Sed id
          velit egestas, mollis nulla non, mattis mi. Sed convallis sapien ac
          convallis iaculis. Nulla lacinia nulla justo, in finibus nisl
          dignissim vel. Aenean tincidunt, nulla sed tempus semper, elit est
          ultricies turpis, sed tincidunt nunc ligula varius lorem. Morbi
          vestibulum sem mattis placerat viverra. Nullam nulla nunc, vehicula id
          ligula sed, suscipit dignissim enim. Ut varius orci vitae odio posuere
          lobortis. Pellentesque lacinia dapibus neque vel mattis. Sed
          consectetur at lorem ac congue. Quisque vel ligula orci. Aenean
          venenatis a nulla id consequat. Duis cursus libero vitae vehicula
          consequat.
        </p>
        <p>
          Maecenas sed velit arcu. Nullam malesuada, eros vitae vehicula mattis,
          felis est efficitur orci, facilisis porttitor nibh tortor eget arcu.
          In semper facilisis ligula, id dignissim nisl lacinia ut. Praesent
          mollis dolor ut varius tincidunt. Duis nisi nisl, ornare eget sem sit
          amet, convallis faucibus dolor. Nam fermentum sed erat nec iaculis.
          Duis egestas, enim sit amet congue blandit, ex sem malesuada sapien,
          sit amet euismod risus dui ultricies risus.
        </p>
        <p>
          Donec sit amet mi iaculis, interdum tortor nec, eleifend ligula. Cras
          id vehicula velit, nec porttitor arcu. Donec erat mauris, dignissim
          tempus enim id, vulputate pellentesque mauris. Sed sed erat arcu. Sed
          eu lectus porta, ultricies ligula a, elementum nisi. Morbi mi nunc,
          lacinia quis dolor in, tempus porta magna. Sed eleifend lacinia felis,
          sed mollis nisi elementum id. Nullam auctor velit libero, sit amet
          tincidunt orci laoreet sit amet. In sit amet ligula dapibus, pharetra
          purus eget, laoreet quam. Integer hendrerit ipsum vitae diam sodales
          porttitor. Integer ornare dignissim congue.
        </p>
        <p>
          Aliquam vel nisl nec augue elementum ultricies vel eget nisl. Proin
          lacinia auctor quam vel vestibulum. Duis feugiat ipsum a lorem
          tristique molestie. Nam vitae nunc orci. Donec faucibus turpis eu
          dapibus ultrices. Donec viverra sit amet ante id faucibus. Cras
          posuere convallis erat vitae fermentum.
        </p>
        <p>
          Maecenas ultrices metus lectus, a feugiat elit semper vel. Morbi
          tristique, sem commodo mattis efficitur, enim elit tempor magna, vitae
          malesuada metus risus sed tellus. Aenean ut neque eros. Mauris tellus
          lorem, tincidunt ut posuere volutpat, fermentum vitae mauris. Donec
          luctus, mi et varius venenatis, ligula magna molestie ante, ut feugiat
          enim eros eget justo. Nam auctor metus in quam sollicitudin pretium.
          Duis sed velit id turpis accumsan fringilla.
        </p>
      </footer>
    </div>
  );
};

export default App;
