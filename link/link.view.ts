namespace $.$$ {
	
	export class $hyoo_meta_link extends $.$hyoo_meta_link {
		
		@ $mol_mem
		title() {
			return this.id() === '0_0' ? this.all_title() : super.title() 
		}
		
		@ $mol_mem
		uri() {
			return this.$.$mol_state_arg.make_link({
				[ this.param() ]: this.id(),
			})
		}
		
	}
	
}
