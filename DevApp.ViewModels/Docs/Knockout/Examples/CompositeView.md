##### CompositeView.html

```html
<div data-master-vm="CompositeViewVM">
   <section data-master-vm="FilterableMovieTableVM">
      <div data-vm="MovieTableVM">
        <table>
          <thead>
            <tr data-bind="foreach: Headers">
              <th data-bind="text: $data"></th>
            </tr>
          </thead>
          <tbody data-bind="foreach: Data">
            <tr data-bind="css: { selected: $root.SelectedKey() == Rank()}, vmCommand: {SelectedKey: Rank}">
              <td data-bind="text: Rank"></td>
              <td data-bind="text: Movie"></td>
              <td data-bind="text: Year"></td>
              <td data-bind="text: Director"></td>
            </tr>
          </tbody>
        </table>
        <div class="pagination" data-bind="foreach: Pagination">
          <div data-bind="css: {current: $root.SelectedPage() === $data}, text: $data, vmCommand: {SelectedPage: $data}"></div>
        </div>
      </div>
    </section>
    <aside>
      <div class="card" data-vm="MovieDetailsVM">
        <header class="card-header">
          <b data-bind="text:Movie.Movie"></b>
          <div data-bind="text:Movie.Year"></div>
        </header>
        <section class="card-body">
          <b>Director</b>
          <p data-bind="text:Movie.Director"></p>
          <b>Cast</b>
          <div data-bind="foreach: {data: Movie.Cast().split(',')}">
            <div data-bind="text: $data"></div>
          </div>
        </section>
      </div>   
    </aside>
   </div>
</div>
```