/**
 * When the user changes the page in the consent manager,
 * an event with this type is emitted.
 */
export interface ChangePageEvent {
  page: number;
  perPage: number;
}
