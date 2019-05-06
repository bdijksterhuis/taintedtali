import { Injectable, Injector, ComponentFactoryResolver } from "@angular/core";
import { Adapter } from "../core/adapter";
import { Page } from "../core/page";

/**
 * Block
 * Model for blocks in the inbound JSON
 */
export class Block {
  constructor(public id: string, public name: string, public slug: string, public component: any) {}
}

/**
 * BlockAdapter
 * Used to adapt the incoming JSON to a new instance of the block class
 */
@Injectable({
  providedIn: "root"
})
export class BlockAdapter implements Adapter<Block> {
  private _blocks;

  constructor(private injector: Injector, private componentFactoryResolver: ComponentFactoryResolver) {
    this._blocks = this.injector.get("ComponentList");
  }

  adapt(item: any): Block {
    let cf = this.componentFactoryResolver.resolveComponentFactory(this._blocks[item.fields.component]);
    return new Block(item.sys.id, item.fields.name, item.fields.slug, cf);
  }
}

/**
 * IBlock
 * Interface for block components
 */
export interface IBlock {
  currentPage: Page;
  content: any;
}
