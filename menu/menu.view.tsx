/* @jsx $mol_jsx */
namespace $.$$ {
	
	export class $hyoo_meta_menu extends $.$hyoo_meta_menu {
		
		logo_id() {
			return this.list().land.id()
		}
		
		tools() {
			return this.editable() ? super.tools() : []
		}
		
		@ $mol_mem
		items() {
			return this.filtered().map( id => this.Item( id ) )
		}
		
		@ $mol_mem_key
		item( id: $mol_int62_string ) {
			return this.list().world()!.Fund( $hyoo_meta_model ).Item( id )
		}
		
		@ $mol_mem
		filtered() {
			
			if( this.filter() ) {
				
				return this.yard()
					.land_search( this.filter() )
					.map( id => this.item( id ).whole() )
					.filter( meta => meta.title().trim() )
					.map( meta => meta.id() )
				
			} else {
			
				return this.ids().map( $mol_int62_string_ensure ).reverse()
				
			}
		}
		
		@ $mol_mem_key
		item_row( id: $mol_int62_string ) {
			return [
				this.Item_link( id ),
				... this.ids().includes( id )
					? this.editing() ? [ this.Item_remove( id ) ] : []
					: [ this.Item_add( id ) ],
			]
		}
		
		@ $mol_mem_key
		item_items( id: $mol_int62_string ) {
			return this.item_list( id ).list().map( id => this.Item( id ) )
		}
		
		@ $mol_action
		item_remove( id: $mol_int62_string ) {
			this.list().drop( id )
		}
		
		@ $mol_action
		item_add( id: $mol_int62_string ) {
			this.list().add( id )
			this.item_moved( id )
		}
		
		item_html( id: $mol_int62_string ) {
			return( <a href={ this.item_uri( id ) }>{ this.item_title( id ) }</a> ).outerHTML
		}
		
		item_text( id: $mol_int62_string ) {
			return `\\\\${ this.item_title( id ) }\\${ this.item_uri( id ) }\\\\`
		}
		
		transfer_adopt( transfer : DataTransfer ) {
			
			const uri = transfer.getData( "text/uri-list" )
			if( !uri ) return
			
			return $mol_int62_string_ensure( uri.match( /[0-9a-z]+_[0-9a-z]+/ )?.[0] ?? '' )
			
		}

		@ $mol_action
		receive_after( anchor: $mol_int62_string, dropped: $mol_int62_string ) {

			if( anchor === dropped ) return
			
			const list = this.list()
			const exists = list.has( dropped )
			list.drop( dropped )
			
			const index = list.list().indexOf( anchor )
			list.insert( [dropped], index + 1 )
			
			if( !exists ) this.item_moved( dropped )
			
		}
		
		@ $mol_action
		receive_end( dropped: $mol_int62_string ) {
			
			const list = this.list()
			const exists = list.has( dropped )
			list.drop( dropped )
			
			this.list().insert( [dropped], 0 )
			
			if( !exists ) this.item_moved( dropped )
			
		}
		
		// item_drag_end( id: $mol_int62_string, event: DragEvent ) {
		// 	if( event.dataTransfer!.dropEffect !== 'move' ) return
		// 	this.list().drop( id )
		// }
		
	}
	
}
