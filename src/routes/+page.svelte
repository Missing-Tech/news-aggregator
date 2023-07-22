<script lang="ts">
  import { auth, firestore } from "$lib/firebase";
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import { FirebaseApp, userStore } from "sveltefire";
</script>

<div class="flex flex-col items-center overflow-hidden h-screen">
  <div
    class="flex flex-col border border-b-0 items-center h-[90vh] absolute bottom-0 w-[85vw]"
  >
    <h1 class="text-5xl uppercase font-serif py-8 border-b w-full text-center">
      News Aggregator
    </h1>
    <div class="flex flex-col w-full">
      <h1
        class="text-7xl uppercase font-serif py-8 border-b w-full text-center"
      >
        GET WORLD NEWS INSTANTLY
      </h1>
      <div class="grid grid-cols-3 p-4 gap-2">
        <div class="flex flex-col">
          <img
            class=" aspect-auto h-96 object-cover"
            src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
          />
          <p class="font-light pt-2">From Markus Spiske on Unsplash</p>
          <p class="text-xs font-light pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sem odio, elementum non fringilla quis, luctus eget
            turpis. Cras ipsum tortor, tristique eget tortor non, ornare
            hendrerit ex. Donec vulputate turpis a laoreet viverra. Sed ultrices
            est a lacinia tempor. Sed eu ligula at enim pretium elementum.
            Phasellus ornare augue ac velit ornare, quis laoreet quam
            condimentum. Integer ut libero eget tortor gravida hendrerit vel
            ultricies lorem. Aenean vitae egestas eros. Sed lorem purus,
            bibendum eu egestas id, molestie a urna. Suspendisse potenti.
            Aliquam mattis id quam ultrices molestie. Maecenas lorem sapien,
            consequat at maximus non, blandit at dolor. Proin blandit eros est,
            ac fringilla nulla molestie id.
          </p>
        </div>
        <div class="flex flex-col gap-2 px-4">
          <p class="text-xs font-light">
            Etiam tempus lacinia risus nec dapibus. Duis vestibulum ipsum nec
            mauris tincidunt auctor. Sed et efficitur nisl. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Morbi a enim sollicitudin, tempor mauris vitae,
            facilisis leo. Praesent et blandit arcu. Ut viverra tellus est, sed
            fringilla arcu tristique a. Etiam quis est varius, rhoncus sapien
            sit amet, vestibulum eros. Donec suscipit, erat nec eleifend
            lobortis, ante velit placerat dolor, vel aliquam quam dui accumsan
            enim. Sed at varius ligula, sed interdum ligula. Duis egestas, mi
            quis congue interdum, velit ex vulputate augue, sed blandit mi metus
            sit amet sapien. Nulla facilisi. Quisque rhoncus molestie nunc a
            fermentum. Cras hendrerit ex vitae risus sodales, non volutpat
            mauris dapibus.
          </p>
          <p class="text-xs font-light">
            Curabitur euismod viverra turpis a maximus. In luctus maximus ante,
            in volutpat felis. Nullam mi risus, feugiat id accumsan et,
            vulputate eget erat. Sed odio dui, maximus sit amet lacus quis,
            vestibulum elementum purus. Phasellus in magna sed est dapibus
            hendrerit ut a magna. Maecenas suscipit velit sit amet orci
            tincidunt imperdiet. Nullam id ornare justo. Donec eu lectus vel
            neque aliquam molestie. Integer mi libero, pulvinar a consequat ut,
            pulvinar nec odio. Pellentesque ligula nibh, molestie ut congue eu,
            lobortis in nulla. Aenean at sapien libero. Phasellus non urna vel
            orci mollis efficitur ut id diam. Duis lobortis pharetra erat eget
            blandit. Cras tincidunt augue eu turpis auctor, at elementum ligula
            dapibus. Sed posuere enim pharetra sem pulvinar, ut sagittis ante
            interdum. Quisque laoreet et nisl at ultricies.
          </p>
          <p class="text-xs font-light">
            Donec dolor risus, euismod quis urna quis, dignissim tempus tellus.
            Pellentesque commodo posuere diam, vitae mollis nunc imperdiet sit
            amet. Donec pulvinar nisl non tellus scelerisque, ac pharetra mauris
            venenatis. Suspendisse potenti. Duis sed tincidunt mi, pulvinar
            iaculis nulla. Curabitur quis mi mollis, accumsan felis at, cursus
            nisl. Mauris blandit posuere enim, a semper turpis mollis eu. Sed
            quis auctor arcu, eget lobortis mi. Phasellus eleifend nisl augue,
            sit amet volutpat erat tincidunt eu. Suspendisse vitae elit sit amet
            arcu tincidunt vestibulum in porta leo. Pellentesque quis
            pellentesque diam, faucibus mollis orci. Curabitur et fermentum
            eros, id efficitur metus.
          </p>
        </div>
        <div class="px-4 flex flex-col gap-2">
          <p class="text-xs font-light">
            Maecenas mi sem, dignissim sit amet porta egestas, porttitor id
            lectus. Fusce tincidunt ligula id dolor semper convallis. Praesent
            sodales sapien at sagittis pellentesque. Etiam congue lacus turpis,
            vitae imperdiet nibh convallis vitae. Vestibulum elementum eget
            tortor in scelerisque. In ipsum felis, mattis auctor libero vel,
            interdum lobortis lorem. Phasellus mattis, nunc euismod tristique
            ultrices, neque libero pellentesque nisl, a scelerisque massa nulla
            at ligula. Praesent quis semper libero, a sodales tellus. Aenean
            pellentesque, nisi sed pulvinar efficitur, risus lorem consequat
            mauris, quis lobortis lacus tortor nec sapien. Nam dignissim
            efficitur facilisis.
          </p>
          <div class="h-full bg-neutral flex flex-col">
            <img
              class=" aspect-auto h-56 object-cover"
              src="https://images.unsplash.com/photo-1541480601022-2308c0f02487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
            />

            <div class="flex flex-col p-4 gap-4">
              <h2
                class="text-4xl uppercase text-white text-center font-extrabold"
              >
                FIND OUT MORE
              </h2>
              <a class=" btn btn-white" href="/signup">Sign up</a>
              <a class=" btn btn-ghost text-white" href="/login">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
