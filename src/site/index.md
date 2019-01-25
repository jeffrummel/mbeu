---
layout: _layout.pug
title: MBE(u)
subHed: Module, Block, Element, (utility)
---

## A methodology for creating modular, maintainable styles that borrow from the best of component and utility-based approaches.

MBE(u), pronounced: _imbue_, is a methodology for creating scalable and maintainable CSS consisting of (M)odule, (B)lock, (E)lament and (u)tility classes. If you are familiar with [BEM](//getbem.com) you will recognize the naming pattern of MBE(u). On the surface they are quite similar but looking deeper reveals two key differences. 

The first difference is the addition of a module as the highest level parent. Adding the module as a parent item adds structure and context to blocks and elements, allowing blocks to be much more malleable to their parent modules creating an opportunity to write DRYer more reusable styles. 

MBE(u) also replaces the Modifier with the Utility. When reading BEM styles and markup, that things become convoluted quickly and there are many opportunities to create duplicate and conflicting styles on an HTML element. As the code is tweaked over time, this often results in more and more modifiers added to individual parts.

### Architecture

The architecture is quite simple. A module can contain blocks, elements and other modules as direct descendants. Blocks can contain other blocks and elements as direct descendants. Elements can contain other elements as direct descendants. Utilities are reserved for changes to the DOM or outlier scenarios in design or hierarchy.

**‌(M)** Module level components will typically be a large container of blocks and elements and will declare the layout engine.

**(B)** Block level components will be smaller in structure and often repeated collections of elements. 

**(E)** Element level will define the content within the context of the block. 

**(u)** Utility items should be used sparingly

### Structure and Naming

When considering the naming convention, each level should be named contextually within relation to its parent or parents, and when the names are descriptive, they need to be illustrative of the content/role/function, and not of appearance, so having a block or element named `.cta` (for Call To Action) would be good, but having one named `.red` or `column-3` would be bad.

A few common names I rely on for modules and blocks when building marketing sites and landing pages:

- Heading - `hed`: Generally reserved for the page heading and consisting of an h1 tag and a nav at a minimum.
- Marquee - `marq`: Typically consists of a large graphic, attention-grabbing text and a call-to-action. 
- Longform - `long`: long-form article
- Shortform - `short`: short-form article
- Supplemental - `sup`: supplemental content can contain 
- Collection - `coll`: Collection of self-contained items.
- Cards - `card`: Collection of self-contained repeatable content.
- Kickers - `kick`: Self-contained content designed to kick the user to a secondary location.
- Calls to Action - `cta`: Content designed to drive action from the users.
- Billboard - `bil`: Billboards are typically reserved for sites with larger pattern libraries where we see multiple modules with a large graphic, attention-grabbing text, and a CTA repeated throughout a single URL.

Block and element names are often recycled, relying on the context of the parent for clarity. Many of the naming conventions are borrowed from the print publishing world:

- Headline or heading - `hed` 
- Subheadline - `sub`  
- Deck - `dek`: phrase or sentence teasing the article. In web publishing, it is often casually referred to as a blurb or teaser  
- Lede - `led`: in print Publishing - Leading paragraph  
- Copy `copy`: generally text content that is or contains one or more paragraph.
- Nut Graf - `nut`: in print publishing, this is a nutshell paragraph. 
- Photo Caption - `cap`: the headline for photo 
- Cutline - `cut`: description of a photo.
- Graphic - `grfx`: Graphic or picture.
- Hyperlink - `link`: typically an "a" tag.

Example wireframes can be found [here](/example/this-one) and [here](/example/that-one), based on this [wonderful tweet](https://twitter.com/jongold/status/694591217523363840). 

#### Modules and Blocks

Modules and blocks should be named based upon the purpose they serve and not the content they hold or their appearance. The markup below shows cards each with a heading, deck, and a graphic. 

```
<ul class="coll">
  <li class="coll__card">
    <h3 class="coll__card--hed">diam scelerisque</h3>
    <p class="coll__card--copy">Hac accumsan interdum volutpat himenaeos malesuada quis mi, varius eget erat tempor placerat habitasse dapibus, nam mauris taciti nec ut lacinia.</p>
    <img class="coll__card--grfx"/>
  </li>
  <li class="coll__card">
    <h3 class="coll__card--hed">cubilia donec</h3>
    <p class="coll__card--copy">Hac accumsan interdum volutpat himenaeos malesuada quis mi, varius eget erat tempor placerat habitasse dapibus, nam mauris taciti nec ut lacinia.</p><img class="coll__card--grfx"/>
  </li>
</ul>
```

This content agnostic name can hold products, news posts, authors, product features or any number of collections and the name, "cards" describes each `coll__card` as a self-contained content block that can be displayed in a grid, carousel, stack or randomly across the module.

##### Collection Module and Card Block - Example

When we go into styling the collection and card we can give the collection just enough markup to be reusable with different types of collections.

```
.coll {
  display:flex;
  flex-flow:row wrap;
  justify-content:space-evenly;
  align-items:center;
  padding:1.2rem;
  &__card {
    flex:1 0 30%;
    text-align:center;
  }
}
```

The above puts us in an excellent position to add in a new collection of self-contained content blocks that are used to kick the users deeper into the site.

```
.coll {
  display:flex;
  flex-flow:row wrap;
  justify-content:space-evenly;
  padding:1.2rem;
  &__card {
    align-self:center;
    flex:1 0 30%;
    text-align:center;
  }
  &__kick {
    align-self:flex-start;
    flex:0 0 50%;
    text-align:left;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:.8rem;
  }
}
```

As the interface evolves and changes over time, you may find yourself outgrowing the collection module and see that there are enough differences in the cards and kickers that each requires its own module. In this scenario, we can apply our standard naming conventions and graduate both collections into two new modules, `.card` and `.kick`. 

##### Card Module - Example

```
.card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap:4vw;
  &__item {
    &--hed {}
    &--dek {}
    &--grfx {}
    &--link {}    
  }
}
```

##### Kicker Module - Example

```
.kick {
  display:flex;
  flex-flow:row wrap;
  justify-content:space-evenly;
  align-items:flex-start;
  padding:1.2rem;
  &__item {
    &--hed {}
    &--dek {}
    &--grfx {}
    &--link {}    
  }
}
```

#### Blocks and Elements

Elements should share their naming convention across different blocks. You will note in the examples above; we have an identical naming structure in the blocks and elements. Consistent names of elements establish a predictable pattern for teams. 


## Philosophy

MBE(u) attempts to create a cohesive naming and structure for the presentation layer, where the whole greater than the sum of its parts. The naming convention helps unite content creation, strategy, design, and delivery. Common component names based on the purpose of the content give strategists and creators context to each content field they are populating. These names then become available to the designers to inform how the eye will move through the page. The design files can translate easily to the content management architecture and to the code that is ultimately published on the site.

The "__" and "--" separators established with BEM are the best I've seen. They're easy to read and interpret. MBE(u) adds a bit of hierarchy and context to that structure. The practice of naming based upon purpose gives us predictability, flexibility and a common language for the full content life-cycle.

The MBE(u) methodology has been developed over years of learning, reading, and testing. It has been applied to small web-apps and websites of varying sizes. As with most things in this world MBE(u) works best on teams where there's trust, communication, clarity of scope and documentation.
