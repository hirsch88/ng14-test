import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<bal-app class="has-sticky-footer">
    <header>
      <!-- Header content -->
    </header>
    <main class="container py-large">
      <bal-accordion openLabel="open" closeLabel="close">
        <p class="py-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          dicta culpa quae pariatur dolorum? Debitis aspernatur cumque expedita
          corrupti libero quisquam fuga, impedit repellendus distinctio
          assumenda quasi nulla ratione dolorem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ducimus, ipsum possimus? Commodi nisi
          facere cum harum nam. Sed, sapiente dolores error iste soluta quae
          reprehenderit culpa explicabo quod molestiae quasi. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Modi aliquam dolor obcaecati
          sint. Deleniti voluptatum libero nemo exercitationem accusamus quasi
          dignissimos aut consectetur maiores nam harum, voluptate hic
          consequuntur commodi!
        </p>
      </bal-accordion>
      <bal-accordion openLabel="open" closeLabel="close" class="pt-large">
        <p class="py-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          dicta culpa quae pariatur dolorum? Debitis aspernatur cumque expedita
          corrupti libero quisquam fuga, impedit repellendus distinctio
          assumenda quasi nulla ratione dolorem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ducimus, ipsum possimus? Commodi nisi
          facere cum harum nam. Sed, sapiente dolores error iste soluta quae
          reprehenderit culpa explicabo quod molestiae quasi. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Modi aliquam dolor obcaecati
          sint. Deleniti voluptatum libero nemo exercitationem accusamus quasi
          dignissimos aut consectetur maiores nam harum, voluptate hic
          consequuntur commodi!
        </p>
      </bal-accordion>
    </main>
  </bal-app>`,
})
export class AppComponent {
  title = 'angular-14';
}
