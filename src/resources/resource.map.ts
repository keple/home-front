import { Injectable } from "@angular/core";

@Injectable()
export class ResourceMap{
  private TEST_DOC = '/resource/test_doc';
  private TEST_DOC_2 = '/resource/test_doc_2';
  get(resourceName) {
    return this[resourceName];
  }
}
