export default interface IFight {
	name: string
	attacks: {} // REVIEW Can I make this a dictionary<IAttack>?
	health: {
		base: number
		mod: number
		amount: number
		total: number
	}
	items: {} // REVIEW See if I can force this entity to only add things of type <IItem>


}