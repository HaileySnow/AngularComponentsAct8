import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  standalone: true,
  imports: [],
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {

  @ViewChild('item') item!: ElementRef;
    shoppingList: string[] = [];
    addItem(): void {
        const itemName = this.item.nativeElement.value;
        if (itemName && this.shoppingList.indexOf(itemName)) {
            this.shoppingList.push(itemName);
        }
    }

    removeItem(itemName: string): void {
        this.shoppingList.splice(this.shoppingList.indexOf(itemName), 1);
    }

}
