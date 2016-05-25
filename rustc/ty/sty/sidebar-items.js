initSidebarItems({"enum":[["BoundRegion",""],["BuiltinBound",""],["FnOutput",""],["InferTy",""],["Region","Representation of regions."],["TypeVariants",""]],"struct":[["BareFnTy",""],["Binder","Binder is a binder for higher-ranked lifetimes. It is part of the compiler's representation for things like `for<'a> Fn(&'a isize)` (which would be represented by the type `PolyTraitRef == Binder<TraitRef>`). Note that when we skolemize, instantiate, erase, or otherwise \"discharge\" these bound regions, we change the type from `Binder<T>` to just `T` (see e.g. `liberate_late_bound_regions`)."],["BuiltinBounds",""],["ClosureSubsts","A closure can be modeled as a struct that looks like:"],["ClosureTy",""],["DebruijnIndex","A [De Bruijn index][dbi] is a standard means of representing regions (and perhaps later types) in a higher-ranked setting. In particular, imagine a type like this:"],["EarlyBoundRegion",""],["ExistentialBounds","Bounds suitable for an existentially quantified type parameter such as those that appear in object types or closure types."],["FloatVid",""],["FnSig","Signature of a function type, which I have arbitrarily decided to use to refer to the input/output types."],["FreeRegion","A \"free\" region `fr` can be interpreted as \"some region at least as big as the scope `fr.scope`\"."],["IntVid",""],["ParamTy",""],["ProjectionTy","Represents the projection of an associated type. In explicit UFCS form this would be written `<T as Trait<..>>::N`."],["RegionVid",""],["SkolemizedRegionVid",""],["TraitRef","A complete reference to a trait. These take numerous guises in syntax, but perhaps the most recognizable form is in a where clause:"],["TraitTy",""],["TyVid",""],["TypeAndMut",""]],"type":[["PolyFnOutput",""],["PolyFnSig",""],["PolyTraitRef",""]]});