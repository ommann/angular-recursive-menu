import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map, Observable} from "rxjs";

const symbols = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

export function addIdToTree(tree: any[], symbols: string[], parent?: any) {
  tree.forEach((node, index) => {
    node.id = parent ? `${parent.id}-${symbols[index]}` : symbols[index];

    if (node.children.length) {
      addIdToTree(node.children, symbols, node);
    }
  });
}

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent {
  public list = [
    {
      title: 'childless',
      children: []
    },
    {
      title: 'great grandparent',
      children: [
        {
          title: 'childless grandsibiling',
          children: []
        },
        {
          title: 'grandparent',
          children: [
            {
              title: 'childless sibiling',
              children: []
            },
            {
              title: 'another childless sibiling',
              children: []
            },
            {
              title: 'parent',
              children: [
                {
                  title: 'child',
                  children: []
                },
                {
                  title: 'another child',
                  children: []
                },
              ]
            },
            {
              title: 'another parent',
              children: [
                {
                  title: 'child',
                  children: []
                },
              ]
            },
          ]
        },
        {
          title: 'another grandparent',
          children: [
            {
              title: 'parent',
              children: [
                {
                  title: 'child',
                  children: []
                },
                {
                  title: 'another child',
                  children: []
                },
                {
                  title: 'a third child',
                  children: []
                },
                {
                  title: 'teen mother',
                  children: [
                    {
                      title: 'accident',
                      children: []
                    },
                  ]
                },
              ]
            },
          ]
        },
      ]
    },
  ];
  public opened: string[] = [];
  public selected$: Observable<string>;
  // public selected = "";


  constructor(private router: Router, private route: ActivatedRoute) {
    addIdToTree(this.list, symbols);

    this.selected$ = this.route.params.pipe(map(params => {
      return params["id"];
    }));
  }

  public selectItem(id: string) {
    this.router.navigate([id]);
    // this.selected = id;
  }

  public toggleOpened(id: string) {
    if (this.opened.includes(id)) {
      this.opened = this.opened.filter(item => item !== id);
    } else {
      this.opened.push(id);
    }
  }
}
