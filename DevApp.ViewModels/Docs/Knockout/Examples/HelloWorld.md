﻿##### HelloWorld.html

```html
<div id="HelloWorld" data-vm="HelloWorldVM">
  <section>
    <div>
      <label>First name:</label>
      <input type="text" class="form-control" data-bind="value: FirstName" />
    </div>
    <div>
      <label>Last name:</label>
      <input type="text" class="form-control" data-bind="value: LastName" />
    </div>
  </section>
  <div>
    Full name is
    <b>
      <span data-bind="text: FullName" />
    </b>
  </div>
</div>
```