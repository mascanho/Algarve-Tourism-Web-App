import React from "react";
import TableOfContentsFloating from "./TableOfContents";
import { createClient } from "contentful";

async function getAllBlogs() {
  const client: any = createClient({
    space: process.env.CONTENTFUL_SPACE_ID3!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN3!,
  });
  const res = await client.getEntries({ content_type: "blog" });

  return await res.items;
}

const page = async (props: any) => {
  const { category, slug } = props.params;

  const allBlogs = await getAllBlogs();

  const blog = allBlogs.filter((obj: any) => obj.fields.slug === slug);

  return (
    <section className="max-w-7xl w-11/12 sm:flex mx-auto mt-20">
      <div className="sm:w-1/6 sm:flex sm:flex-col justify-start sticky inline-block order-2">
        <TableOfContentsFloating />
      </div>

      <div className="sm:w-3/4 w-11/12 flex-1 font-semibold">
        <div className="w-11/12 mb-8">
          <img
            src="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/07/HERO-Lagos-algarve-GettyImages-1211602144.jpg"
            alt="albvufeir"
            className="w-full"
          />
        </div>
        <h1 className="text-black text-5xl font-semibold">
          {blog[0]?.fields?.title}
        </h1>
        <section className="mt-10">
          <p className="sm:pr-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            neque soluta omnis placeat aut dolores quidem nulla nisi eos animi
            molestiae culpa velit voluptate architecto quibusdam. Consequuntur
            veniam quia alias libero necessitatibus amet dolor eos accusamus
            itaque possimus minus ducimus, nobis molestias omnis aliquam animi
            ad, ipsum dolorum, dignissimos distinctio? Laborum qui aut officiis
            aspernatur? Laborum aliquid itaque rerum illum, sed sunt unde
            numquam harum ad atque vitae, fugiat delectus aspernatur iste
            corrupti sapiente dicta! Aliquam porro pariatur alias voluptas
            voluptatum sunt nostrum enim fuga accusantium voluptate eligendi
            inventore repellendus rerum neque sed, culpa quam quis nesciunt
            cupiditate. Iste, vel molestias repellat laborum corrupti et eum
            itaque iusto ea ex ab hic ratione repellendus autem quis ad
            perferendis officia nostrum laudantium animi. Odio praesentium
            pariatur tenetur nobis dolores aperiam exercitationem unde delectus,
            incidunt ut fugit, inventore optio voluptates cum consectetur
            impedit voluptas repellendus assumenda voluptate rerum! Quia
            quisquam nesciunt voluptatibus alias! Neque hic nam quos quia quam
            perferendis, quo officia repudiandae iste porro numquam quidem
            molestiae nostrum, voluptatum nihil ipsam facere, voluptas
            exercitationem. Porro amet soluta dolorem, expedita, itaque
            asperiores molestiae voluptatibus, quos dignissimos dolor in? Quo
            odio doloribus quos culpa eos, dicta odit adipisci hic, minima
            reiciendis sint libero ipsam obcaecati quasi. Harum magnam expedita
            alias dicta quas modi beatae ea quis voluptas iure sed vel culpa,
            amet ut architecto? Reiciendis culpa recusandae quod consequuntur
            alias magnam laudantium, facere consectetur, cumque aut illum nulla!
            Veritatis architecto, exercitationem labore quod veniam magni
            praesentium iusto voluptas id laborum atque ullam voluptate quidem
            voluptates, reiciendis quaerat rerum molestias voluptatem, enim
            ipsa. Voluptates ea, similique explicabo quae illo pariatur aliquam
            vero! Hic odit doloribus necessitatibus autem! Officiis minus labore
            nesciunt ut eveniet, inventore magni autem voluptate velit eligendi,
            odit quidem beatae accusantium fuga tempora voluptatem accusamus
            doloremque eaque porro pariatur, vero optio numquam! In, ipsa,
            voluptatum, optio reiciendis alias modi a adipisci odio eveniet
            delectus at tempora. Eius sequi nostrum officiis unde repellendus
            ipsa error libero ut nesciunt vitae accusantium aliquam temporibus
            consequatur, mollitia tenetur nisi alias similique magni eum
            delectus blanditiis. Sit nisi natus architecto, dicta id similique
            saepe vero possimus, alias pariatur esse ex. At dolorem veniam
            aperiam eligendi culpa, amet alias impedit optio quam porro quae
            facere iste atque expedita accusamus fuga reprehenderit molestias
            vel tempora cupiditate blanditiis quisquam odio inventore ipsam.
            Ipsa nesciunt voluptatem alias perspiciatis eius tempore, ut saepe
            distinctio, architecto praesentium obcaecati id eaque autem,
            necessitatibus numquam dolorem iusto voluptates nisi vel aliquid
            quae quia magnam beatae laudantium. Dolore alias rerum quaerat.
            Deserunt nemo quae incidunt ipsum iusto, similique odio obcaecati
            suscipit animi, iure praesentium. Ullam repudiandae modi deserunt
            veniam. Repellat facilis commodi earum culpa fugit, qui quaerat
            voluptatum perspiciatis, nostrum illo asperiores, tempore harum
            eaque? Voluptate officia nam voluptatem corrupti eius beatae,
            ducimus eaque quasi similique cumque eos rem repellat quas qui iusto
            earum quis dolor doloremque omnis minus consequatur ipsam tempore!
            Voluptas rem doloribus aliquam tempora cumque numquam veritatis,
            vero animi aperiam. Eum quisquam eos non voluptates, harum velit,
            laborum tempora minima similique modi eveniet ullam illum magnam
            obcaecati repellendus, qui esse corrupti inventore commodi iure
            adipisci vitae? Beatae sapiente eius exercitationem corrupti magni
            facilis nostrum voluptate et molestiae quia asperiores animi
            voluptas odio quidem optio ratione neque expedita nemo unde
            distinctio obcaecati, corporis saepe. Odio pariatur, quasi omnis
            assumenda vitae debitis minus provident, laudantium sint voluptas
            tempora soluta ipsum ipsa! Commodi est tempore iste doloremque!
            Consectetur consequatur vero fuga consequuntur natus corrupti ullam
            minima culpa ad ducimus dolores quibusdam, iste quod eos dolore
            praesentium debitis, nulla ut velit quis minus perspiciatis.
            Similique perspiciatis possimus in sed, harum minima inventore
            aliquam obcaecati dicta rerum totam et adipisci dolorum fugit nulla
            tempora quam neque nostrum quae iste maiores omnis facilis! Vero
            reprehenderit repellendus voluptas voluptate porro tempora unde
            aperiam explicabo eaque ratione. Consequatur rerum deleniti illum
            tempora ab ex eveniet magnam dicta quasi ipsa ipsum repudiandae
            dolor provident velit a, earum officiis voluptatibus, eum soluta
            odit voluptatem, possimus libero iusto numquam. Eligendi repudiandae
            expedita beatae maiores iste. Recusandae eius iusto voluptatem
            doloremque pariatur non commodi facere odio deserunt. Pariatur illo
            illum architecto perferendis provident alias atque, facilis iure
            odio, ipsam, doloremque ducimus esse quo voluptatibus minima?
            Veniam, est culpa assumenda ipsam tempora aperiam amet quidem minima
            laborum eligendi reprehenderit exercitationem at soluta nihil magnam
            necessitatibus doloremque harum! Ex aliquam id impedit placeat
            praesentium eum quisquam aspernatur, ab quae recusandae doloremque.
            Numquam non suscipit similique est quod, iste, assumenda aut magnam
            dignissimos accusamus, voluptatem optio perspiciatis maiores eius
            hic quis voluptate molestias ullam? Cumque ea minima quibusdam quis
            nihil rerum earum, quam excepturi iusto. Quibusdam itaque laboriosam
            unde error soluta praesentium voluptatibus animi inventore velit!
            Officiis magnam laudantium nemo optio quis magni porro! Placeat ut
            architecto pariatur cumque quia, sequi, obcaecati quo quis
            perspiciatis, quaerat aspernatur. Voluptatibus praesentium excepturi
            sapiente, non, veniam odio est, et expedita quasi beatae inventore
            quia totam voluptate. Enim molestias aut atque sunt animi eius
            tempore veniam in voluptate est nostrum quam quo soluta illo minus
            quos, quaerat aliquid, delectus iusto cupiditate! Veniam officiis
            repellendus odio natus tempore laudantium nulla animi unde aperiam,
            omnis culpa labore accusantium ipsa velit eaque nemo magni
            aspernatur corporis saepe id beatae. Reprehenderit natus dignissimos
            assumenda modi delectus quia id. Laborum modi impedit perspiciatis
            numquam animi magni possimus, rerum nihil repellat sint sapiente
            totam quis quod omnis. Officiis, rerum quaerat. Esse ad doloremque
            aliquam voluptatem consectetur ipsam expedita, ducimus dolorem
            suscipit accusantium nisi perspiciatis distinctio, possimus nesciunt
            facere ex totam sint dicta consequatur magnam? Dicta consectetur sed
            amet. Minima, quibusdam facere, libero aut pariatur natus aliquid
            nesciunt similique doloremque veritatis voluptate quis. Eligendi ut
            suscipit accusantium praesentium nihil dolore animi. Laboriosam
            neque quidem commodi eius quo magnam alias hic! Itaque est a ab
            quibusdam quidem deserunt rerum reprehenderit earum nesciunt vel
            voluptas quas sequi debitis hic facere, error aspernatur explicabo.
            Provident nam eveniet optio odit eligendi voluptas voluptatum
            magnam. Eius et incidunt blanditiis totam architecto nulla eum a
            autem? Odio in nostrum sint distinctio voluptatem dolore corrupti
            accusamus amet expedita, enim cumque, doloremque itaque tempora quo
            quis sed porro harum. Eius distinctio incidunt dolorum repellat
            maiores aspernatur eveniet fugit. Repellat enim odio quia illo
            pariatur! Molestias, quo vel labore saepe consequuntur facere unde
            accusantium eveniet nobis cupiditate similique nisi debitis
            voluptatem aliquid ipsa ipsam perferendis sequi natus minus impedit
            suscipit corporis ad cum. Veniam voluptatum repellat assumenda
            molestias inventore unde animi ullam nostrum? Aut sint labore harum
            itaque optio deserunt dolorum consectetur facere commodi hic
            reiciendis nam magni magnam quia nobis minima rem voluptas ducimus
            possimus unde quasi placeat, ex quae est! Quidem deleniti mollitia
            unde illum distinctio voluptatum omnis suscipit, recusandae dolores
            repellendus architecto inventore porro corporis quas eum minima
            dolore veniam dolorem cupiditate adipisci asperiores, voluptate
            perferendis. Consequuntur cum, sed aliquam doloribus aliquid dicta,
            quidem voluptatem, explicabo at quos dolores laboriosam incidunt
            minus veritatis iusto officiis! Sed quos illum iure a earum, iusto
            amet eligendi molestiae ipsam dolorem quibusdam eaque perferendis
            cupiditate quo vero dolore. Quaerat illum molestiae aperiam ipsum
            praesentium mollitia neque, eius commodi consectetur eum. Qui
            explicabo, rem eaque tempore magnam atque molestias tenetur placeat
            magni consectetur aspernatur unde dolor illum corporis? Tempore
            eligendi id corporis commodi modi animi expedita corrupti, error
            sint dolore ipsum, voluptatem quidem, delectus enim tenetur ea culpa
            placeat labore!
          </p>
        </section>
      </div>
    </section>
  );
};

export default page;
