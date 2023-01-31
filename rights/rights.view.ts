namespace $.$$ {
	
	export class $hyoo_meta_rights extends $.$hyoo_meta_rights {
		
		@ $mol_mem
		editor_list() {
			const meta = this.meta().id()
			return this.editors()
				.filter( peer => peer !== meta )
				.map( peer => this.Editor_link( peer ) )
		}
		
		@ $mol_mem
		editor_add_rows() {
			return [
				this.Editor_add_bar(),
				this.editor_add_id() ? this.Editor_add_preview() : this.Editor_fill_all(),
			]
		}
		
		@ $mol_mem
		editor_add_id( next = '' ) {
			return ( next.trim().match( /^(?:.*=)?([0-9a-z]+_[0-9a-z]+)/ )?.[1] ?? '' ) as $mol_int62_string
		}
		
		editor_add_filled() {
			return Boolean( this.editor_add_id() )
		}
		
		editor_add_bid() {
			return this.editor_add_filled() ? super.editor_add_bid() : ''
		}
		
		editor_fill_all() {
			this.editor_add_id( '0_0' )
		}
		
		editor_add_submit() {
			const peer = this.editor_add_id()
			this.meta().land.level( peer, $hyoo_crowd_peer_level.mod )
			this.editor_add_id( '' )
		}
		
		editor_add_preview() {
			return this.peer( this.editor_add_id() )
		}

	}
	
}
