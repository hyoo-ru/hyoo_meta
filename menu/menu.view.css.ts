namespace $ {
	
	const { rem, px } = $mol_style_unit
	
	$mol_style_define( $hyoo_meta_menu, {
		
		flex: {
			basis: rem(20),
			grow: 0,
		},
		
		Item_drop: {
			'@': {
				'mol_drop_status': {
					'drag': {
						box: {
							shadow: [{
								inset: false,
								x: 0,
								y: px(-1),
								blur: 0,
								spread: 0,
								color: $mol_theme.focus,
							}]
						},
					},
				},
			},
		},
		
		Item_row: {
			justifyContent: 'space-between',
			alignItems: 'flex-start',
		},
		
		Drop_end: {
			
			flex: {
				grow: 1,
				basis: rem(1.5),
			},
			
			'@': {
				'mol_drop_status': {
					'drag': {
						box: {
							shadow: [{
								inset: false,
								x: 0,
								y: px(-1),
								blur: 0,
								spread: 0,
								color: $mol_theme.focus,
							}]
						},
					},
				},
			},
			
		},
		
		Item_link: {
			flex: {
				grow: 1,
				shrink: 1,
			},
		},
		
		Item_items: {
			padding: {
				left: rem(1.25),
			},
		},
		
	} )
	
}
